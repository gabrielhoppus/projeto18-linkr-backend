import joi from 'joi';

export const postSchema = joi.object({
    publishURL: joi.string().uri().required(),
    comment: joi.string().required()
})