import { loginRepository } from "../repositories/login.repository.js";

export async function signUp(req, res) {
    const { user } = res.locals;
    try {
        await loginRepository.insertUser(user);
        return res.status(201).
            send('Usuário cadastrado');
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function signIn(req, res) {
    const { user } = res.locals;
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}