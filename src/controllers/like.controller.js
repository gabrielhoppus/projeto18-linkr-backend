import { deleteLike, insertLike, listLikes } from "../repositories/like.repository.js";
import { getToken } from "../repositories/post.repository.js";

export async function postLike(req, res) {
  const token = res.locals.session;
  const { id } = req.body;
  const userRows = await getToken(token);
  const user_id = userRows.rows[0].id;
  try {
    await insertLike(user_id, id);
    return res.status(200).send("Like dado!");
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function removeLike(req, res) {
  const token = res.locals.session;
  const { id } = req.body;
  const userRows = await getToken(token);
  const user_id = userRows.rows[0].id;
  try{
    await deleteLike(user_id, id);
    return res.status(204).send("Like removido com sucesso");
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function getLikes(_, res){
  try {
    const likes = await listLikes()
    return res.status(200).send(likes.rows);
  } catch (error) {
    res.status(500).send(error);
  }
}