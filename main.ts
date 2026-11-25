import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I deleted your spreadsheet, but I kept a perfect memory of it — until I needed the space to store the apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
