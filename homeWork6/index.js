const Koa = require("koa");
const koaRouter = require("koa-router");

const app = new Koa();
const router = new koaRouter();

router.get("home", "/", (context) => {
  context.body = "<h1>Index page<h1>";
});

router.get("home", "/about", (context) => {
  context.body = "<h1>About Page<h1>";
});

router.get("home", "/contact", (context) => {
  context.body = "<h1>Contact Page<h1>";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server runnnig port 3000"));
