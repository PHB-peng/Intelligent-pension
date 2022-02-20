'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async login() {
    const Uacc = this.ctx.request.body.useracc;
    // console.log("a:"+typeof(this.ctx.request.body.useracc))
    const nuseracc = await this.app.mysql.get('usermess', { useracc: Uacc });
    console.log(nuseracc , typeof(nuseracc))
    // return nuseracc.userid
    if(nuseracc == null){
      return nuseracc;
    }else if(this.ctx.request.body.userpass == nuseracc.userpass){
        return nuseracc.userid;
      }else{return '203'}
    // const sql = `select * from usermess`;
    // const dduser = await this.app.mysql.query(sql);   
  }
  async register(){
    const Uacc = this.ctx.request.body.useracc;
    const Upass = this.ctx.request.body.userpass;
    const Uacclen = Uacc.length;
    console.log(Uacclen,typeof(Uacc))
    const Usrid = Upass.substring(0,2) + Uacc.substring(Uacclen-4,Uacclen)
    const nuseracc = await this.app.mysql.get('usermess', { useracc: Uacc });
    if(nuseracc){
      return null
    }else{
       await this.app.mysql.insert('usermess', { useracc: Uacc, userpass: Upass ,userid:Usrid});
      const nuseracc = await this.app.mysql.get('usermess', { useracc: Uacc });
       return nuseracc.userid
       
    }
  }
}
module.exports = HomeService;