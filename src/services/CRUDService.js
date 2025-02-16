const connection = require("../config/database");
const getAllUsers = async () => {
    let [results, fields] = await connection.query(`select * from Users`)
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(`select * from Users where id = ?`, [userId]);
    return results;
}
module.exports = {
    getAllUsers,
    getUserById
}