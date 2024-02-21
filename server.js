const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Handle GET requests
  server.get("/", async (req, res) => {
    await app.render(req, res, "/home", req.query);
  });

  server.get("/account", async (req, res) => {
    await app.render(req, res, "/account", req.query);
  });

  server.get("/addblog", async (req, res) => {
    await app.render(req, res, "/addblog", req.query);
  });

  server.get("/livefeed", async (req, res) => {
    await app.render(req, res, "/livefeed", req.query);
  });

  server.get("/myfeed", async (req, res) => {
    await app.render(req, res, "/myfeed", req.query);
  });

  server.get("/topfeed", async (req, res) => {
    await app.render(req, res, "/topfeed", req.query);
  });

  // For all other GET requests, use Next.js default handler
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // Handle POST requests (example)
  server.post("/c", (req, res) => {
    // Handle POST request logic here
    res.send("Received POST request");
  });

  // Handle other POST requests (if needed)
  server.post("*", (req, res) => {
    res.status(404).send("Not Found");
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
