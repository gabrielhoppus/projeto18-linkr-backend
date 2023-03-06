import joi from 'joi';

export const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required(),
    username: joi.string().min(2).required(),
    picture: joi.string().uri().required()
})

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
})