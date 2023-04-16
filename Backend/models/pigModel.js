const database = require("../utils/database");

function getAll() {
  return new Promise((resolve, reject) => {
    database.query("SELECT * FROM pigs", (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function getByPaginated(pageSize, offset) {
  return new Promise((resolve, reject) => {
    database.query(
      "SELECT * FROM pigs LIMIT ? OFFSET ? ",
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
    database.query("SELECT * FROM pigs WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function create(id, name) {
  return new Promise((resolve, reject) => {
    database.query(
      "INSERT INTO pigs(id,name) VALUES (?,?)",
      [id, name],
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
      "UPDATE pigs SET name = ? WHERE id = ?",
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
    database.query("DELETE FROM pigs WHERE id = ?", [id], (err, results) => {
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
