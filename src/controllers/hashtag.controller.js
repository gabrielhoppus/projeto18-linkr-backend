import hashTagRepository from "../repositories/hashtag.repository.js";



export async function postHashTags(req,res){

    const {name} = req.body

    try {

        await hashTagRepository.postHashTag(name);

        return res.sendStatus(201);

    } catch (error) {
        return res.status(500).send(error);
    }

}

export async function getHashTags(req,res){

    try {

        const listOfHashTags = await hashTagRepository.fromHashTag();

        return res.send(listOfHashTags.rows[0]).status(200);

    } catch (error) {
        return res.status(500).send(error);
    }

}



export async function getPostsFromHashTag(req, res) {

    const { name } = req.params
    
    try {

        const postsFromHashTag = await hashTagRepository.fromHashTagName(name);

        return res.status(200).send(postsFromHashTag.rows)

    } catch (error) {
        return res.status(500).send(error);
    }
}