const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to Home Page");
    res.end();
    return
  }
  if (req.url === "/about") {
    res.write("Welcome to About Page");
    res.end();
    return
  }
  if (req.url === "/contact") {
    res.write("Welcome to Contact Page");
    res.end();
    return
  }
  res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
});

server.listen(5000);
