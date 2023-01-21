import { Request, Response } from "express";
import { selectAllHumors, selectHumorsByMood, insertHumor, updateHumor, removeHumor } from "../repositories/humor-repository.js";
import { humorPost, humorUpdate } from "../protocols.js";

export async function getHumors(req: Request, res: Response) {

    const {mood} = req.query;

    if(mood){

        const moodString = mood.toString();
        const moodLower = moodString.toLowerCase();

        try {
            const moodList = await selectHumorsByMood(moodLower);
            return res.status(200).send(moodList.rows);
        } catch (error) {
            return res.status(500).send({message: error.message});
        }

    }

    try {
        const humorsList = await selectAllHumors();
        res.status(200).send(humorsList.rows);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }

}

export async function postHumor(req: Request, res: Response) {

    const humor = req.body as humorPost;

    try {
        await insertHumor(humor);
        res.status(201).send({message: "Humor inserido com sucesso!"});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }

}

export async function putHumor(req: Request, res: Response) {

    const { id } = req.params;
    const humor = req.body as humorUpdate;

    try {
        await updateHumor(humor, id);
        res.status(200).send({message: "Humor atualizado com sucesso!"});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }

}

export async function deleteHumor(req: Request, res: Response) {

    const { id } = req.params;

    try {
        await removeHumor(id);
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }

}