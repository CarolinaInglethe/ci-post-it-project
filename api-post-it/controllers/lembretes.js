import { db } from "../db.js";

export const getAll = (_, res) => {
    const queryMysql = "SELECT * FROM lembretes";

     db.query( queryMysql, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const addLembrete = (req,res) => {
    const q = "INSERT INTO lembretes(`texto`, `data`) VALUES (?)";

    const values = [
      req.body.texto,
      req.body.data 
    ];

    db.query(q, [values] , (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Lembrete criado com sucesso !");
    })
};

export const deleteLembrete = () => {
    const q = "DELETE FROM lembretes WHERE `id` = ?"; 

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Lembrete Deletado com sucesso !");
    })
}