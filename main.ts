import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: The agent isn't stuck \u2014 it's thinking. You aren't thinking \u2014 you're staring at the same error, waiting for it to confess.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
