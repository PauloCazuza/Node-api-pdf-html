const express = require("express");
const fs = require("fs");
const router = express.Router();
const puppeteer = require("puppeteer");
const pdf = require("html-pdf");
const ejs = require("ejs");

const options = {
  format: "A4",
  type: "pdf",
  orientation: "portrait",
  border: {},
};

router.get("/", async function (req, res) {
  await setTimeout(
    () =>
      fs.readFile("./uploads/report.pdf", async function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
      }),
    3000
  );
});

router.post("/", async function (req, res) {
  const { html } = req.body;

  await pdf.create(html, options).toFile("./uploads/report.pdf", () => {});

  await setTimeout(
    () =>
      fs.readFile("./uploads/report.pdf", async function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
      }),
    3000
  );
});

module.exports = router;
