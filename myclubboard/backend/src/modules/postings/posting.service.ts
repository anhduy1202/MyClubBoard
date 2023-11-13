const mysql = require('mysql2/promise')

// Create the connection to the database
export default class PostingService {
    async getPosting(
        id: number
    ) {
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        // Get all postings from a university by using club_id then get the university_id from the club and also get the club name and logo
        const res = await connection.execute('select posting.*, club.name as club_name, club.logo as club_logo from posting join club on posting.club_id = club.id where club.id = ?', [id])
        // Not found
        if (res[0].length === 0) {
            throw new Error('No postings found')
        }
        await connection.end();
        return res;
    }
}