import { db } from "../db.js";

export const getAll = async (_, res) => {
    const queryMysql = "SELECT * FROM lembretes";

    db.query( queryMysql, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}