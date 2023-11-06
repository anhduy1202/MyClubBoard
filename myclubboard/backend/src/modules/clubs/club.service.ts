import { NotFoundError } from "Elysia";
const mysql = require("mysql2/promise");

// Create the connection to the database
export default class ClubService {
  async getAllClubs(limit?: number) {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    // Get club info and also get the university name
    const res = await connection.execute(
      "select * from club, university where club.university_id = university.id",
    );
    await connection.end();
    return res;
  }
}
