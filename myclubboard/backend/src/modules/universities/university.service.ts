import { NotFoundError } from 'Elysia';
import { connection } from '../../index';

export default class UniversityService {
    async getAllUni(
        limit?: number
    ): Promise<{ id: number; content: string | null }[]> {
        const res = await connection.query('select * from university', function (err: any, results: any) {
            console.log(results)
        })
        return res
    }
}