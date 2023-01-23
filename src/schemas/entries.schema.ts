import joi from "joi";
import { EntryEntity } from "../protocols";

export const entryValidationSchema = joi.object<EntryEntity>({
    title: joi.string().required().min(3),
    text: joi.string().required().min(10)
})