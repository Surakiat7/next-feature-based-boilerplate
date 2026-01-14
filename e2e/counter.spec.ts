import { test, expect } from "@playwright/test";

test.describe("Counter Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/counter");
  });

  test("should display counter with initial value 0", async ({ page }) => {
    await expect(page.getByTestId("counter-value")).toHaveText("0");
  });

  test("should increment counter when + is clicked", async ({ page }) => {
    await page.getByTestId("increment-button").click();
    
    await expect(page.getByTestId("counter-value")).toHaveText("1");
  });

  test("should decrement counter when - is clicked", async ({ page }) => {
    // First increment a few times
    await page.getByTestId("increment-button").click();
    await page.getByTestId("increment-button").click();
    await expect(page.getByTestId("counter-value")).toHaveText("2");
    
    // Then decrement
    await page.getByTestId("decrement-button").click();
    await expect(page.getByTestId("counter-value")).toHaveText("1");
  });

  test("should reset counter when Reset is clicked", async ({ page }) => {
    // Increment multiple times
    await page.getByTestId("increment-button").click();
    await page.getByTestId("increment-button").click();
    await page.getByTestId("increment-button").click();
    await expect(page.getByTestId("counter-value")).toHaveText("3");
    
    // Reset
    await page.getByTestId("reset-button").click();
    await expect(page.getByTestId("counter-value")).toHaveText("0");
  });

  test("should not exceed max boundary", async ({ page }) => {
    // Click increment until button is disabled (max is 10)
    for (let i = 0; i < 10; i++) {
      await page.getByTestId("increment-button").click();
    }
    
    // Should be at 10
    await expect(page.getByTestId("counter-value")).toHaveText("10");
    // Button should be disabled
    await expect(page.getByTestId("increment-button")).toBeDisabled();
  });

  test("should not go below min boundary", async ({ page }) => {
    // Click decrement until button is disabled (min is -10)
    for (let i = 0; i < 10; i++) {
      await page.getByTestId("decrement-button").click();
    }
    
    // Should be at -10
    await expect(page.getByTestId("counter-value")).toHaveText("-10");
    // Button should be disabled
    await expect(page.getByTestId("decrement-button")).toBeDisabled();
  });
});
