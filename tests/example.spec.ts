import { test, expect, Page } from "@playwright/test";

test("should display pdf", async ({ page }) => {
  await page.goto(
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  );
  await expect(page.locator("body")).toContainText("Dummy PDF file");
});
