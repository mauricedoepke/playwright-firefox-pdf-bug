import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  use: {
    headless: false,
    launchOptions: {
      firefoxUserPrefs: {
        "pdfjs.disabled": false,
      },
    },
  },
  projects: [
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
  ],
};

export default config;
