const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Bir istek gonderildi!");

  const url = req.url;
  const pages = ["", "about", "contact"];

  pages.forEach((page) => {
    if (url === `/${page}`) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h2>${page === "" ? "index" : page} page</h2>`);
    }
  });

  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu ${port} numarali portta baslatildi.`);
});
