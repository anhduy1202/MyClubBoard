import { NotFoundError } from 'Elysia';
const mysql = require('mysql2/promise')

// Create the connection to the database
export default class UniversityService {
    async getAllUni(
        limit?: number
    ) {
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        const res = await connection.execute('select * from university')
        await connection.end();
        return res;
    }
}