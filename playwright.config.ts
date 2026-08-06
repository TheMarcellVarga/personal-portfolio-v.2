import { defineConfig, devices } from "@playwright/test";

const testPort = process.env.PLAYWRIGHT_PORT ?? "3100";
const testBaseUrl = `http://localhost:${testPort}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: testBaseUrl,
    trace: "on-first-retry",
  },
  webServer: {
    command: `npx next dev -p ${testPort}`,
    url: testBaseUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
