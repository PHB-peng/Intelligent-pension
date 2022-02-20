'use strict';

const Service = require('egg').Service;

class PerService extends Service {
  
  async locat() {
    const useridnum = this.ctx.request.body.userid;
    const preson = await this.app.mysql.get('person', { usreid : useridnum });
    // console.log(preson,useridnum)
    return preson
    // const videolist = await this.app.mysql.get('videolist', { video: Uacc });
  }
  async changelocat (){
    const Losat = this.ctx.request.body.arclocation;
    const numtel = this.ctx.request.body.numtel;
    const useridnum = this.ctx.request.body.userid;
    const row = {
      location:Losat,
      telnum:numtel
    }
    const options = {
      where: {
        usreid: useridnum
      }
    }
    const userlocat = await this.app.mysql.get('person', { usreId : useridnum });
    // console.log(userlocat)
    if(userlocat == null){
      const insetlocat = await this.app.insert('person', { telnum: numtel, location: Losat});
      console.log(insetlocat)
      return null
    }else{
      const result = await this.app.mysql.update('person', row,options);
      const updateSuccess = result.affectedRows === 1
      // console.log(result,updateSuccess)
      return result
    }
 }

      async changnsage(){
        const Uage = this.ctx.request.body.yearage;
        const Uname = this.ctx.request.body.name;
        const Usex = this.ctx.request.body.sex;
        const useridnum = this.ctx.request.body.userid;
        const row = {
          userage:Uage,
          name:Uname,
          sex:Usex 
        }
        const options = {
          where: {
            usreid: useridnum
          }
        }
        console.log(Usex , useridnum,Uage)
        const user = await this.app.mysql.get('person', { usreId : useridnum });
        if(user == null){
          const insetlocat = await this.app.insert('person', { telnum: numtel, location: Losat});
          console.log(insetlocat)
          return null
        }else{
          const result = await this.app.mysql.update('person', row,options);
          const updateSuccess = result.affectedRows === 1
          // console.log(result,updateSuccess)
            return result
        }
      }

     async cgheat(){
      const Userweight = this.ctx.request.body.userweight;
      const Uheatapp = this.ctx.request.body.heatapp;
      const Userheight = this.ctx.request.body.userheight;
      const useridnum = this.ctx.request.body.userid;
      const user = await this.app.mysql.get('person', { usreId : useridnum });           
      const row = {
        weight:Userweight,
        applse:Uheatapp,
        height:Userheight,       
      }
      const options = {
        where: {
          usreid: useridnum
        }
      }
      
      console.log(user.sex,"1234")
      if(user == null){
        const insetlocat = await this.app.insert('person', { telnum: numtel, location: Losat});
        console.log(insetlocat)
        return null
      }else{
        const result = await this.app.mysql.update('person', row,options);
        // console.log(result,updateSuccess)
        return result
      }
     }

     async paper(){
      const useridnum = this.ctx.request.body.userid;
      const user = await this.app.mysql.get('person', { usreId : useridnum });
      console.log(useridnum,user)
      return user
     }
}

module.exports = PerService;