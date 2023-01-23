import {entryDelete, entryEdit, insertEntry, returnEntries, returnEntry} from "../repositories/entries.repositories.js";
import { Request, Response } from "express";
import { EntryEntity } from "../protocols.js";
import { QueryResult } from "pg";

export async function getEntriesList(req: Request, res: Response){
    try {
        const entriesList: QueryResult<EntryEntity> = await returnEntries();
        res.send(entriesList.rows)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

export async function getEntry(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const entry: QueryResult<EntryEntity> = await returnEntry(id);
        return res.send(entry.rows[0]);
    } catch (error) {
        console.log(error)
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
    const { id } = req.params;
    const { text } = req.body;
    try {
        await entryEdit(id, text)
        return res.status(200).send(`Entry number ${id} edited.`)
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function deleteEntry(req: Request, res: Response) {
    const { id } = req.params;
    try {
        await entryDelete(id);
        return res.status(200).send(`Diary entry ${id} deleted.`)
    } catch (error) {
        return res.sendStatus(500);
    }
}
