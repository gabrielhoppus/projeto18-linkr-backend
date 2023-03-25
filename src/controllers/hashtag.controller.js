import hashTagRepository from "../repositories/hashtag.repository.js";



export async function postHashTags(req,res){

    const {name} = req.body
    

    try {

        const hashtag = await hashTagRepository.postHashTag(name);

        if(hashtag.rows.lenght > 0) return



        return res.status(201).send(hashtag.rows[0]);

    } catch (error) {
        return res.status(500).send(error);
    }

}

export async function postHashTagPosts(req,res){

    const post_id = req.body.post_id
    const hashtag_id = req.body.hashtag_id
    
    try {

        await hashTagRepository.postHashTagPost(hashtag_id,post_id);

        return res.sendStatus(201);

    } catch (error) {
        return res.status(500).send(error);
    }


}


export async function getHashTags(req,res){

    try {

        const listOfHashTags = await hashTagRepository.fromHashTag();

        return res.send(listOfHashTags.rows).status(200);

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