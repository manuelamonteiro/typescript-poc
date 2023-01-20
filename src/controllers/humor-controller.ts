import { Request, Response } from "express";
import { selectAllHumors, selectHumorsByMood, insertHumor, updateHumor, removeHumor } from "../repositories/humor-repository.js";
import { humorPost, humorUpdate } from "../protocols.js";

export async function getHumors(req: Request, res: Response) {

    const { mood } = req.query;

    try {

    } catch (error) {
        return res.status(500).send({message: error.message});
    }

}

export async function postHumor(req: Request, res: Response) {

    const humor = req.body as humorPost;

    try {

    } catch (error) {
        return res.status(500).send({message: error.message});
    }

}

export async function putHumor(req: Request, res: Response) {

    const { id } = req.params;
    const humor = req.body as humorUpdate;

    try {

    } catch (error) {
        return res.status(500).send({message: error.message});
    }

}

export async function deleteHumor(req: Request, res: Response) {

    const { id } = req.params;

    try {

    } catch (error) {
        return res.status(500).send({message: error.message});
    }
    
}