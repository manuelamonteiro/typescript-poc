import express, { Request, Response, NextFunction } from "express";
import { humorAnalysisPost } from "../schemas/humor-schema.js";
import { selectHumorById } from "../repositories/humor-repository.js";

export function postSchemaValidation(req: Request, res: Response, next: NextFunction) {

    const validationStatus = humorAnalysisPost.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(400).send(error);
        return;
    };

    next();

}

export async function humorExistenceValidation(req: Request, res: Response, next: NextFunction) {

    const { id } = req.params;

    try {
        const isHumorExists = await selectHumorById(id);

        if(isHumorExists.rows.length === 0){
            return res.sendStatus(404);
        }

    } catch (error) {
        return res.status(500).send({message: error.message});
    }

}