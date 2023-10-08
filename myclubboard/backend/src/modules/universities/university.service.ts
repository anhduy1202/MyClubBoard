import { NotFoundError } from 'Elysia';
const mysql = require('mysql2/promise')

// Create the connection to the database
const connection = await mysql.createConnection(process.env.DATABASE_URL)
export default class UniversityService {
    async getAllUni(
        limit?: number
    ) {
        const res = await connection.execute('select * from university')
        await connection.end();
        return res;
    }
}