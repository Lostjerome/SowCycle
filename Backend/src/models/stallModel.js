const database = require("../utils/database");

function getAll() {
  return new Promise((resolve, reject) => {
    database.query("SELECT * FROM stalls", (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function getByPaginated(pageSize, offset) {
  return new Promise((resolve, reject) => {
    database.query(
      "SELECT * FROM stalls LIMIT ? OFFSET ? ",
      [pageSize, offset],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
}

function getById(id) {
  return new Promise((resolve, reject) => {
    database.query(
      "SELECT * FROM stalls WHERE id = ?",
      [id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
}

function create(name) {
  return new Promise((resolve, reject) => {
    database.query(
      "INSERT INTO stalls(number) VALUES (?)",
      [name],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
}

function update(id, name) {
  return new Promise((resolve, reject) => {
    database.query(
      "UPDATE stalls SET name = ? WHERE id = ?",
      [name, id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    database.query("DELETE FROM stalls WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

module.exports = {
  getAll,
  getByPaginated,
  getById,
  create,
  update,
  remove,
};
