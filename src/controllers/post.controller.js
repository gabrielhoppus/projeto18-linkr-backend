import urlMetadata from "url-metadata";
import { savePost, sendPosts, getToken } from "../repositories/post.repository";

export async function publishPost(req, res){

    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    const {url} = req.body;
    const urlTitle = '';
    const urlDescription = '';
    const urlImage = '';

    const sessionRows = await getToken(token);
    if(!sessionRows.rows[0]) return resizeBy,sendStatus(401);
    const session = sessionRows.rows[0];

    urlMetadata(url).then(
    function (metadata) {
        urlTitle = metadata.title;
        urlDescription = metadata.description;
        urlImage = metadata.image;
    },
    function (error) {
        console.log(error)
    })

    try {
        await savePost(url, urlTitle, urlDescription, urlImage)
        return res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}

export async function getPosts(){
    const posts = await sendPosts();
    try {
        res.send(posts.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}