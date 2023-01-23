import connectionDB from "../database/db.js";
import { QueryResult } from "pg";
import { humorAnalysis, humorPost, humorUpdate } from "../protocols.js";

export async function selectAllHumors(): Promise<QueryResult<humorAnalysis>> {
    return connectionDB.query(`SELECT * FROM humor;`);
}

export async function selectHumorsByMood(mood: string): Promise<QueryResult<humorAnalysis>> {
    return connectionDB.query(`SELECT * FROM humor WHERE LOWER (mood) LIKE $1;`, [mood + "%"]);
}

export async function insertHumor(humor: humorPost) {
    return connectionDB.query(`INSERT INTO humor (date, hour, mood, activities) VALUES ($1, $2, $3, $4);`,
        [humor.date, humor.hour, humor.mood, humor.activities]);
}

export async function selectHumorById(id: number | string): Promise<QueryResult<humorAnalysis>> {
    return connectionDB.query(`SELECT * FROM humor WHERE id=$1;`, [id]);
}

export async function updateHumor(humor: humorUpdate, id: number | string) {
    return connectionDB.query(`UPDATE humor SET mood=$1, activities=$2 WHERE id=$3;`, [humor.mood, humor.activities, id]);
}

export async function removeHumor(id: number | string) {
    return connectionDB.query(`DELETE from humor WHERE id=$1;`, [id]);
}
