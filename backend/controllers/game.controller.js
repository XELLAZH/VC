const db = require('../db');

class GameController {
    async createGame(req, res) {
        // Время указывать по типу (YYYY-MM-DD hh:mm:ss)
        const {ord, map, alpha, omega, winner, score, mvp} = req.body;
        const newGame = await db.query(`INSERT INTO games (ord_number, map, team_alpha_id, team_omega_id, team_winner, game_score, map_mvp) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [ord, map, alpha, omega, winner, score, mvp]);
        res.json(newGame.rows[0]);
    }
    
    async getGames(req, res) {
        const games = await db.query('SELECT * FROM games');
        res.json(games.rows);
    }

    async getGameById(req, res) {
        const id = req.params.id;
        const game = await db.query(`SELECT * FROM games WHERE id = $1`, [id]);
        res.json(game.rows[0]);
    }

    async updateGame(req, res) {
        const {id, ord, map, alpha, omega, winner, score, mvp} = req.body;
        const newGame = await db.query(`UPDATE games SET ord_number = $1, map = $2, team_alpha_id = $3, team_omega_id = $4, team_winner = $5, game_score = $6, map_mvp = $7 WHERE id = $8 RETURNING *`, [ord, map, alpha, omega, winner, score, mvp, id]);
        res.json(newGame.rows[0]); 
    }

    async deleteGame(req, res) {
        const id = req.params.id
        const games = await db.query(`delete from games where id = $1`, [id]);
        res.json(games.rows[0]);
    }

}

module.exports = new GameController()