'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.home.login);
  router.post('/login/register', controller.home.register);
  router.get('/videolist',controller.videolist.video);
  router.post('/person',controller.person.Locat);
  router.post('/person/change',controller.person.changeLocat);
  router.post('/person/nsage',controller.person.changnsage);
  router.post('/person/cgheat',controller.person.cgheat);
  router.post('/person/cpaper',controller.person.paper);
};