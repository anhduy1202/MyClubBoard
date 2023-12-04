const mysql = require('mysql2/promise')
import { jwt } from '@elysiajs/jwt'

// Create the connection to the database
export default class LeadService {
    async verifyLead(
        email: string
    ) {
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        // Check if the email is already in the club_lead table, if it is then return the club_id
        const data = await connection.execute('select club_id from club_lead where email = ?', [email])
        // Not found
        if (data[0].length == 0) {
            throw new Error('No email found')
        }
        const club_id = data[0][0].club_id;
        await connection.end();
        return club_id;
    }

    async verifyLeadClub(
        email: string,
        id: number
    ) {
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        // Check if the email is already in the club_lead table, if it is then return the club_id
        const data = await connection.execute('select club_id from club_lead where email = ?', [email])
        // Not found
        if (data[0].length == 0) {
            throw new Error('No email found')
        }
        const club_id = data[0][0].club_id;
        // Check if the club_id matches the id in the url
        if (club_id != id) {
            throw new Error('Club id does not match')
        }
        await connection.end();
        return club_id;
    }

    async createPosting(
        id: number,
        body: any
    ) {
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        // Create posting
        try {
            const res = await connection.execute('INSERT INTO posting (title, qualification, tools, responsibilities, posted_by, apply_link, club_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [body.title, body.qualification, body.tools, body.responsibilities, body.posted_by, body.applyLink, id])
        } catch (e) {
            throw new Error('Error creating posting')
        }
        await connection.end();
        return {"message": "Posting created successfully"}
    }

    async addLead(
        id: number,
        body: any
    ) {
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        // Add lead
        try {
            // Check if the email is already in the club_lead table, if it is then return the club_id
            const data = await connection.execute('select club_id from club_lead where email = ?', [body.email])
            // Not found
            if (data[0].length != 0) {
                throw new Error('Email already exists')
            }
            const res = await connection.execute('INSERT INTO club_lead (name, email, club_id) VALUES (?, ?, ?)', [body.name, body.email, id])
        } catch (e) {
            throw new Error('Error adding lead')
        }
        await connection.end();
        return {"message": "Lead added successfully"}
    }


    async getPostings(
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