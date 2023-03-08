import { finderUsers, findPosts } from '../repositories/user.repository.js';

export async function getUser(req, res) {
    const { id } = req.params;

    try {
        const posts = await findPosts(id);
        return res.status(201).send(posts.rows);
    } catch (error) {
        return res.status(500).send(error);
    }
}

export async function searchUser(req, res){
    const userName = req.body;

    try {
        const users = await finderUsers(userName);
        return res.status(201).send(users.rows);
    } catch (error) {
        return res.status(500).send(error);
    }

}