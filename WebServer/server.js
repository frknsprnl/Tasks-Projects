const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Cap! We received a request");

  const url = req.url;
  const pages = ["", "about", "contact"];

  pages.forEach((page) => {
    if (url === `/${page}`) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h2>${page === "" ? "index" : page} page</h2>`);
    }
  });

  if (!pages.includes(url.substring(1))) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`<h2>404 page not found.</h2>`);
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server started at port : ${port}`);
});
