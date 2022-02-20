'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,app } = this;
    this.ctx.cookies.set('miode','value',{
      maxAge:1000*3600*24,  //cookie存储一天     设置过期时间后关闭浏览器重新打开cookie还存在
      httpOnly:true,
      signed:true,     //对cookie进行签名  防止用户修改cookie
      encrypt:true
  })
    await this.ctx.render('login');
              }

  async login(){
    this.ctx.body = await this.ctx.service.home.login();  
  }

  async register(){
    this.ctx.body = await this.ctx.service.home.register();
  }
}



module.exports = HomeController;
