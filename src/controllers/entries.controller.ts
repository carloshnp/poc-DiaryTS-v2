import {insertEntry, returnEntries, returnEntry} from "../repositories/entries.repositories.js";
import { Request, Response } from "express";

export async function getEntriesList(req: Request, res: Response) {
    try {
        const entriesList = await returnEntries();
        res.send(entriesList);
    } catch (error) {
        return res.sendStatus(500)
    }
}

export async function getEntry(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const entry = await returnEntry(id);
        return res.send(entry);
    } catch (error) {
        return res.sendStatus(500)
    }
}

export async function postEntry(req: Request, res: Response) {
    const { title, text } = req.body;
    const entry = {
        title,
        text
    };
    try {
        const post = await insertEntry(entry);
        return res.status(200).send(post);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function editEntry(req: Request, res: Response) {
    return;
}

export async function deleteEntry(req: Request, res: Response) {
    return;
}
