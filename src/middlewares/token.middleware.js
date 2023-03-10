import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { findUser } from '../repositories/user.repository.js';

dotenv.config()

export async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const parts = authorization.split(" ");
    try {
        if (!authorization || parts.length !== 2)
            return res.status(401).send("Invalid Token");
        const [schema, token] = parts;

        if (schema !== "Bearer")
            return res.status(401).send("Invalid Token Schema");

        jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
            if (error){
                return res.status(401).send("Invalid Token Error")
            }

            const user = (await findUser(decoded.id)).rows[0]

            if (!user || !user.id) 
                return res.status(401).send("Invalid User Token")
        });
        
        res.locals.session = token
        
        return next();
    } catch (error) {
        return res.status(500).send(error);
    }
}