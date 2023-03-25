import { deleteLike, insertLike, listLikes, fetchLikes, postLikes } from "../repositories/like.repository.js";
import { getToken } from "../repositories/post.repository.js";

export async function postLike(req, res) {
  const token = res.locals.session;
  const { id } = req.body;
  const userRows = await getToken(token);
  const user_id = userRows.rows[0].id;
  try {

    const userLikes = await listLikes(user_id, id);

    if (userLikes.rowCount) {
      await deleteLike(user_id, id);
      return res.sendStatus(204);
    }
    await insertLike(user_id, id);
    return res.status(200).send("Like dado!");
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function getLikes(_, res) {
  const token = res.locals.session;
  const userRows = await getToken(token);
  const user_id = userRows.rows[0].id;
  try {
    const likes = await fetchLikes(user_id)
    return res.status(200).send(likes.rows[0].array_agg);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function userLikes(req, res) {
  const { id } = req.params;
  try {
    const likes = await postLikes(id);
    return res.status(200).send(likes.rows[0].array_agg)
  } catch (error) {
    res.status(500).send(error.message);
  }
}