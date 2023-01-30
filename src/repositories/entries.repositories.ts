import { QueryResult } from "pg";
import prisma from "../config/db.js"
import { EntryEntity } from "../protocols.js";

export function returnEntries() {
  return prisma.entries.findMany();
}

export async function returnEntry(id) {
  await prisma.entries.update({
    where: {
      id: parseInt(id)
    },
    data: {
      viewCount: {
        increment: 1
      }
    }
  }) 
  return prisma.entries.findFirst({
    where: {
      id: parseInt(id)
    }
  })
}

export function insertEntry(title, text) {
  return prisma.entries.create({
    data: {
      title,
      text,
      viewCount: 0
    }
  })
}

export function entryEdit(id, text) {
  return prisma.entries.update({
    where: {
      id: parseInt(id)
    },
    data: {
      text
    }
  })
}

export function entryDelete(id) {
  return prisma.entries.delete({
    where: {
      id: parseInt(id)
    }
  })
}
