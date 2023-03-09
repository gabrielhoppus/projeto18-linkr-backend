import bcrypt from 'bcrypt';
import { loginRepository } from "../repositories/login.repository.js";

export async function validateSignUp(req, res, next) {
    const { username, email, password, picture } = req.body;

    try {
        const {rowCount: userFound} =
            await loginRepository.findUser(email);
        if (userFound)
            return res.status(409).
                send('Usuário já cadastrado');
    } catch (error) {
        console.log(error);
        return res.sendStatus(422);
    }

    const hashedPassword = bcrypt.
        hashSync(password, 10);

    res.locals.user = {
        username,
        email,
        picture,
        password: hashedPassword
    }

    next();
}

export async function validateSignIn(req, res, next) {
    const { email, password } = req.body;

    try {
        const userFound =
            (await loginRepository.findUser(email)).
                rows[0];
                
        if (userFound &&
            bcrypt.compareSync(
                password, userFound.password))

            res.locals.user = userFound;

        else
            return res.status(401).
                send({message:'Credenciais incorretas'});

    } catch (error) {
        console.log(error);
        return res.sendStatus(422);
    }
    next();
}