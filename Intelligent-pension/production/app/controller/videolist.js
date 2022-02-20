'use strict';

const Controller = require('egg').Controller;
class VideoController extends Controller {
    async video(){
        const { ctx,app } = this;
        this.ctx.body = await this.ctx.service.videocon.getvideo(); 
    }
}
module.exports = VideoController;
