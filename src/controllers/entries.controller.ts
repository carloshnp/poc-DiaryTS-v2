import {insertEntry, returnEntries, returnEntry} from "../repositories/entries.repositories.js";
import { Request, Response } from "express";

export async function getEntriesList(req: Request, res: Response) {
    try {
        const entriesList = await returnEntries();
        res.send(entriesList.rows)
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
    try {
        const post = await insertEntry(title, text);
        return res.status(200).send(post.rows[0]);
    } catch (error) {
        console.log(error)
        return res.sendStatus(500);
    }
}

export async function editEntry(req: Request, res: Response) {
    return;
}

export async function deleteEntry(req: Request, res: Response) {
    return;
}
