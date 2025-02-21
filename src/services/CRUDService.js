const connection = require("../config/database");
const getAllUsers = async () => {
  return;
};

const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    `select * from Users where id = ?`,
    [userId]
  );

  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const createUser = async (email, name, city) => {};

const updateUserById = async (email, name, city, userId) => {
  let [results, fields] = await connection.query(
    `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
    [email, name, city, userId]
  );

  return results;
};

const deleteUserById = async (userId) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [userId]
  );
  return results;
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
