'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.on('/').render('welcome');

let visitors = 1;

Route.get('/visitors', function * (req, res) {
  // yield res.sendView();
  // const data = yield dWork();
  // cosnt x = yield somethingElse();
  // ...
  //
  console.log(req.url);
  const html = `
    <h1>Hi</h1>
    <p> you asked for url "${req.url()}"</p>
    <p>visitors: ${visitors}</p>`;

    res.send(html);
    visitors++;
});
