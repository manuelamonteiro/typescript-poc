import { Request, Response } from "express";
import { humorPost, humorUpdate } from "../protocols.js";
import { deleteHumorService, postHumorService, putHumorService, getHumorsService, getHumorsServiceByQuery } from "../services/humor-service.js";

export async function getHumors(req: Request, res: Response) {

    const { mood } = req.query;

    if (mood) {

        const moodLower = mood.toString().toLowerCase();

        try {
            const moodList = await getHumorsServiceByQuery(moodLower);
            return res.status(200).send(moodList.rows);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }

    }

    try {
        const humorsList = await getHumorsService();
        res.status(200).send(humorsList.rows);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }

}

export async function postHumor(req: Request, res: Response) {

    const humor = req.body as humorPost;

    try {
        await postHumorService(humor);
        res.status(201).send({ message: "Humor inserido com sucesso!" });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }

}

export async function putHumor(req: Request, res: Response) {

    const { id } = req.params;
    const humor = req.body as humorUpdate;

    try {
        await putHumorService(humor, id);
        res.status(200).send({ message: "Humor atualizado com sucesso!" });
    } catch (error) {
        if (error.type === "humorNotExist") {
            return res.status(404).send({ message: error.message })
        }

        return res.status(500).send({ message: error.message });
    }

}

export async function deleteHumor(req: Request, res: Response) {

    const { id } = req.params;

    try {
        await deleteHumorService(id);
        res.sendStatus(204);
    } catch (error) {
        if (error.type === "humorNotExist") {
            return res.status(404).send({ message: error.message })
        }

        return res.status(500).send({ message: error.message });
    }

}