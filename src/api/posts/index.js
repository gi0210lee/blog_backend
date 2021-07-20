const Router = require('koa-router');
const PostsCtrl = require('./post.ctrl');

const posts = new Router();

posts.get('/', PostsCtrl.list);
posts.post('/', PostsCtrl.write);

const post = new Router();
post.get('/', PostsCtrl.read);
post.delete('/', PostsCtrl.remove);
post.patch('/', PostsCtrl.update);

posts.use('/:id', PostsCtrl.checkObjectId, post.routes());

export default posts;
