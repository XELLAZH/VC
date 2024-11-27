const db = require('../db');

class UserController {
    async createUser(req, res) {
        const {nickname, password, role} = req.body;
        const newUser = await db.query(`INSERT INTO users (user_login, user_password, user_role) VALUES ($1, $2, $3) RETURNING *`, [nickname, password, role]);
        res.json(newUser.rows[0]);
    }

    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`);
        res.json(users.rows);
    }

    async getUserById(req, res) {
        const id = req.params.id
        const users = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
        res.json(users.rows[0]);
    }

    async updateUser(req, res) {
        const {id, login, password, role} = req.body;
        const user = await db.query(`UPDATE users SET user_login = $1, user_password = $2, user_role = $3 WHERE id = $4 RETURNING *`, [login, password, role, id]);
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const users = await db.query(`delete from users where id = $1`, [id]);
        res.json(users.rows[0]);
    }
}

module.exports = new UserController()