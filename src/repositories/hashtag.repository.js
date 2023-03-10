import { db } from "../config/database.connection.js";

function fromHashTagName (name) {
    return db.query(`
    select * from posts
    join hashtag_posts 
        on posts.id = hashtag_posts.post_id
    join hashtag 
        on hashtag.id = hashtag_post.hashtag_id 
    where hashtag.name = $1`
    ,[name]);

}

function fromHashTag () {
    return db.query(`select * from hashtags`)
}

function postHashTag (name) {
    return db.query(
    `insert on hashtags (name) values ($1)`
    ,[name]);

}

const hashTagRepository = {fromHashTagName,postHashTag,fromHashTag}

export default hashTagRepository