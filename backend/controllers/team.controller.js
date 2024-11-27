const db = require('../db');

class TeamController {
    async createTeam(req, res) {
        const {teamName, capId, coachId, rating} = req.body;
        const newTeam = await db.query(`INSERT INTO teams (team_name, capitan_id, coach_id, rating_points) VALUES ($1, $2, $3, $4) RETURNING *`, [teamName, capId, coachId, rating]);
        res.json(newTeam.rows[0]);
    }

    async getTeams(req, res) {
        const teams = await db.query(`SELECT * FROM teams`);
        res.json(teams.rows);
    }

    async getTeamById(req, res) {
        const id = req.params.id
        const teams = await db.query(`SELECT * FROM teams WHERE id = $1`, [id]);
        res.json(teams.rows[0]);
    }

    async updateTeam(req, res) {
        const {id, teamName, capId, coachId, rating} = req.body;
        const team = await db.query(`UPDATE teams SET team_name = $1, capitan_id = $2, coach_id = $3, rating_points = $4 WHERE id = $5 RETURNING *`, [teamName, capId, coachId, rating, id]);
        res.json(team.rows[0])
    }

    async deleteTeam(req, res) {
        const id = req.params.id
        const teams = await db.query(`delete from teams where id = $1`, [id]);
        res.json(teams.rows[0]);
    }
}

module.exports = new TeamController()