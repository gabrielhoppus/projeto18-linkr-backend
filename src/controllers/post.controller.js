import urlMetadata from "url-metadata";
import {
  savePost,
  sendPosts,
  getToken,
  deleteHashtags,
  deletePost,
} from "../repositories/post.repository.js";
import { findPosts } from "../repositories/user.repository.js";

export async function publishPost(req, res) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const { publishURL, comment } = req.body;
  const urlTitle = "";
  const urlDescription = "";
  const urlImage = "";

  const userRows = await getToken(token);
  if (!userRows.rows[0]) return res.sendStatus(401);
  const user = sessionRows.rows[0];

  urlMetadata(publishURL).then(
    function (metadata) {
      urlTitle = metadata.title;
      urlDescription = metadata.description;
      urlImage = metadata.image;
    },
    function (error) {
      console.log(error);
    }
  );

  try {
    await savePost(
      user.id,
      comment,
      publishURL,
      urlTitle,
      urlDescription,
      urlImage
    );
    return res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getPosts(req, res) {
  const posts = await sendPosts();
  try {
    if (posts.rows[0].length === 0) res.send("There are no posts yet");
    res.send(posts.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function destroyPost(req, res) {
  const { post_id } = req.params;
  try {
    const posts = findPosts(post_id);
    if (posts.rowCount === 0) return res.sendStatus(404);

    await deleteHashtags(post_id);

    await deletePost(post_id);

    res.status(204).send("deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
}
