import LeadService from './leads.service';
import { Delete, Get, Post, Put, BaseController, handleNotSignedIn, handleForbiddenError } from '../../utils';
import jwt from "jsonwebtoken";

var jwksClient = require('jwks-rsa');

class LeadController extends BaseController {
    routes = [];
    constructor(public leadService: LeadService) {
        super("/lead");
    }
    @Post("/verify")
    async verify(ctx: any) {
        let res = await leadService.verifyLead(ctx.body.email);
        return res
    }
    @Get("/postings/:id")
    async postings(ctx: any) {
        let res = await leadService.getPostings(ctx.params.id);
        return res[0]
    }
    // Create posting for club
    @Post("/create-posting/:id")
    async createPosting(ctx: any) {
        const token = ctx.bearer;
        if (!token) {
            return handleNotSignedIn(Error("Not signed in"), ctx);
        }
        const decoded = jwt.decode(token, { complete: true });
        let verified = await leadService.verifyLeadClub(decoded?.payload?.email, ctx.params.id);
        if (!verified) {
            return handleForbiddenError(Error("Not allowed"), ctx);
        }
        // Create posting
        let res = await leadService.createPosting(ctx.params.id, ctx.body);
        return res 
    }


}

const leadService = new LeadService();

export default new LeadController(leadService).start();