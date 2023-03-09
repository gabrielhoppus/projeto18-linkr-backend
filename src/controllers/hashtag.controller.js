import hashTagRepository from "../repositories/hashtag.repository.js";



export async function postHashTags(req,res){

    const hashTag = req.body

    try {

        await hashTagRepository.postHashTag(hashTag);

        return res.sendStatus(201);

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