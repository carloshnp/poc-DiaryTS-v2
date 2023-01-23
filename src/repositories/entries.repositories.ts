import { db } from "../config/db.js";

export function returnEntries() {
  return db.query("SELECT id, title, text FROM entries");
}

export function returnEntry(id) {
    // return db.query();
    return;
}

export function insertEntry(title, text) {
  return db.query(
    `INSERT INTO entries ("title", "text", "viewCount") VALUES ($1, $2, $3) RETURNING id;`,
    [title, text, 0]
  );
}

export function entryEdit(entry) {
    // return db.query();
    return;
}

export function entryDelete(entry) {
  // return db.query();
    return;
}
