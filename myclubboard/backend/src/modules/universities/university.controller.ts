import UniversityService from './university.service';
import { Delete, Get, Post, Put, BaseController } from '../../utils';


class UniversityController extends BaseController {
    routes = [];
    constructor (public universityService: UniversityService) {
        super("/universities");
    }
    @Get("/")
    async index(ctx: any) {
        let res =  await universityService.getAllUni()
        return res[0]
    }
}

const universityService = new UniversityService();

export default new UniversityController(universityService).start();