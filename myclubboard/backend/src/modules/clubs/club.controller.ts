import ClubService from './club.service';
import { Delete, Get, Post, Put, BaseController } from '../../utils';


class ClubController extends BaseController {
    routes = [];
    constructor (public clubService: ClubService) {
        super("/clubs");
    }
    @Get("/")
    async index(ctx: any) {
        let res =  await clubService.getAllClubs();
        return res[0]
    }
}

const clubService = new ClubService();

export default new ClubController(clubService).start();