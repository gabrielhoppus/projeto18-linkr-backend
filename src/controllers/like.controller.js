
export async function postLike(_, res) {
    const { id } = req.body;
    try {
        const like = await insertLike(id);
        res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error);
    }
}