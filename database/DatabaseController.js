import mysql from "mysql2/promise";

class DatabaseController {
  db = "";
  async initializeDB() {
    try {
      this.db = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "e_learning",
      });
    } catch (err) {
      console.log(err);
    }
  }

  async select(sql = "") {
    let res = await this.db.query(sql);
    return res[0] ?? [];
  }
}

export default new DatabaseController();
