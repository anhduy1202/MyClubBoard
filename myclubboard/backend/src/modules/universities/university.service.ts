import { NotFoundError } from 'Elysia';
const mysql = require('mysql2/promise')

// Create the connection to the database
export default class UniversityService {
    async getAllUni(
        limit?: number
    ) {
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        // Get all universities and also create new variable for number of clubs in each university
        const res = await connection.execute('select *, (select count(*) from club where club.university_id = university.id) as num_clubs from university')
        await connection.end();
        return res;
    }
}