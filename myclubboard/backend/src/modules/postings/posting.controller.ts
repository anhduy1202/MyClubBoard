import PostingService from './posting.service';
import { Delete, Get, Post, Put, BaseController } from '../../utils';


class PostingController extends BaseController {
    routes = [];
    constructor(public postingService: PostingService) {
        super("/universities");
    }
    @Get("/:id")
    async index(ctx: any) {
        let res = await postingService.getPostingsFromUni(ctx.params.id);
        return res[0]
    }
}

const postingService = new PostingService();

export default new PostingController(postingService).start();