'use strict';

const Service = require('egg').Service;

class VideoconService extends Service {
  async getvideo() {
    const sql = `select * from videolist`;
    const videolist = await this.app.mysql.query(sql);
    return videolist
    // const videolist = await this.app.mysql.get('videolist', { video: Uacc });
  }
}

module.exports = VideoconService;