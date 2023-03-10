import urlMetadata from "url-metadata";
import {
  savePost,
  sendPosts,
  getToken,
  deleteHashtags,
  deletePost,
  patchPost,
} from "../repositories/post.repository.js";
import { findPosts } from "../repositories/user.repository.js";

export async function publishPost(req, res) {
  const token = res.locals.session;
  const { url, comment } = req.body;
  const urlTitle = "";
  const urlDescription = "";
  const urlImage = "";

  const userRows = await getToken(token);
  const user = userRows.rows[0];

  urlMetadata(url).then(
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
    await savePost(user.id, comment, url, urlTitle, urlDescription, urlImage);
    return res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getPosts(req, res) {
  const posts = await sendPosts();
  try {
    if (!posts.rowCount) res.send("There are no posts yet");
    res.send(posts.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function destroyPost(req, res) {
  const { post_id } = req.params;
  try {
    const posts = await findPosts(post_id);
    if (posts.rowCount === 0)
      return res.status(404).send("post does not exist");

    await deleteHashtags(post_id);

    await deletePost(post_id);

    res.status(204).send("deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function editPost(req, res) {
  const { post_id } = req.params;
  const { title, comment } = req.body;

  try {
    const post = await findPosts(post_id);
    if (post.rowCount === 0) {
      return res.status(404).send("post does not exist");
    }

    await patchPost(title, comment, post_id);

    return res.status(201).send("post edited");
  } catch (error) {
    res.status(500).send(error.message);
  }
}
