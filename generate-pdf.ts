import puppeteer from "puppeteer";
import fs from "fs";

printPDF().then((content) => {
  fs.writeFile("test.pdf", content, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/print", { waitUntil: "networkidle0" });
  const pdf = await page.pdf({
    format: "A4",
    margin: {
      top: 25,
      left: 0,
      bottom: 0,
      right: 0
    }
  });

  await browser.close();
  return pdf;
}
