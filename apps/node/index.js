const express = require("express");
const promClient = require("prom-client");

const app = express();
const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

const counter = new promClient.Counter({
  name: "node_app_requests_total",
  help: "Total requests",
  registers: [register],
});

app.get("/", (req, res) => {
  counter.inc();
  console.log("Request received");
  res.send("Hello from Node.js");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(3001, () => console.log("Node app running on :3001"));
