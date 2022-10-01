const Koa = require("koa");
const app = new Koa();

const pages = ["", "about", "contact"];

app
  .use((ctx) => {
    ctx.body = "Hello!";
    pages.forEach((page) => {
      if (ctx.url === `/${page}`) {
        ctx.type = "html";
        ctx.body = `<h1>Welcome to ${page === "" ? "index" : page} page!</h1>
        <div>
        <a href="/"><button>Go to Index Page</button></a>
        <a href="/about"><button>Go to About Page</button></a>
        <a href="/contact"><button>Go to Contact Page </button></a> </div>`;
      }
    });
  })
  .listen(3000);
