import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the homepage with title", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.locator("h1")).toContainText("Next.js Boilerplate");
  });

  test("should have navigation links", async ({ page }) => {
    await page.goto("/");
    
    const nav = page.locator("header nav");
    await expect(nav.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Counter" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
  });

  test("should navigate to counter page", async ({ page }) => {
    await page.goto("/");
    
    await page.click('a[href="/counter"]');
    
    await expect(page).toHaveURL("/counter");
    await expect(page.locator("h1")).toContainText("Counter Demo");
  });

  test("should navigate to about page", async ({ page }) => {
    await page.goto("/");
    
    await page.getByRole("link", { name: "About" }).click();
    
    await expect(page).toHaveURL("/about");
    await expect(page.locator("h1")).toContainText("About");
  });
});
