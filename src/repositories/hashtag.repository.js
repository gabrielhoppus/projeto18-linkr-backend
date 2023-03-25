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
    return db.query(`SELECT COUNT(*) 
    FROM hashtags 
    GROUP BY hashtags.name 
    ORDER BY COUNT(*) DESC; 
    `)
}

function postHashTag (name) {
    return db.query(
    `insert into hashtags (name) values ($1) RETURNING id`
    ,[name]);

}

function postHashTagPost (hashtag_id,post_id) {
    return db.query(
    `insert into hashtag_posts(hashtag_id,post_id) values ($1,$2)`
    ,[hashtag_id,post_id]);

}

const hashTagRepository = {fromHashTagName,postHashTag,fromHashTag,postHashTagPost}

export default hashTagRepository