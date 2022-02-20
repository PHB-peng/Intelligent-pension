'use strict';

const Controller = require('egg').Controller;
class PersonController extends Controller {
    async Locat(){
        const { ctx,app } = this;
        this.ctx.body = await this.ctx.service.per.locat(); 
    }

     async changeLocat(){
        const { ctx,app } = this;
        this.ctx.body = await this.ctx.service.per.changelocat(); 
    }
   async changnsage(){
    const { ctx,app } = this;
    this.ctx.body = await this.ctx.service.per.changnsage();
   }
   async cgheat(){
    const { ctx,app } = this;
    this.ctx.body = await this.ctx.service.per.cgheat();
   }
  async paper(){
    const { ctx,app } = this;
    this.ctx.body = await this.ctx.service.per.paper();
  }
}
module.exports = PersonController;