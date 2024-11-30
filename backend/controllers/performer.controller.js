const db = require('../db');

class PerformerController {
    async createPerformer(req, res) {
        const {userId, fullname, yearOfBirth, studyGroup, nickname, ingameRank, teamId} = req.body;
        const newPerformer = await db.query(`INSERT INTO performers (user_id, fullname, birth_year, study_group, nickname, ingame_rank, team_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [userId, fullname, yearOfBirth, studyGroup, nickname, ingameRank, teamId]);
        res.json(newPerformer.rows[0]);
    }
    
    async getPerformers(req, res) {
        const performers = await db.query("SELECT * FROM performers");
        res.json(performers.rows);
    }

    async getPerformerById(req, res) {
        const id = req.params.id;
        const performer = await db.query(`SELECT * FROM performers WHERE user_id = $1`, [id]);
        res.json(performer.rows[0]);
    }

    async updatePerformer(req, res) {
        const {userId, fullname, yearOfBirth, studyGroup, nickname, ingameRank, teamId} = req.body;
        const newPerformer = await db.query(`UPDATE performers SET fullname = $1, birth_year = $2, study_group = $3, nickname = $4, ingame_rank = $5, team_id = $6 WHERE user_id = $7 RETURNING *`, [fullname, yearOfBirth, studyGroup, nickname, ingameRank, teamId, userId]);
        res.json(newPerformer.rows[0]);
    }

    async deletePerformer(req, res) {
        const id = req.params.id;
        const performers = await db.query(`DELETE FROM performers WHERE user_id = $1`, [id]);
        res.json(performers.rows[0]);
    }

}

module.exports = new PerformerController()