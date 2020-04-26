describe("Sample App Tests", () => {
  test("take a screenshot", async () => {
    await Page.goto("http://localhost:8080/");
    await Page.screenshot({ path: "screenshots/screenshot.png" });
  });

  test("the heading should contain a specific string", async () => {
    await Page.goto("http://localhost:8080");
    const heading = await TestId("page-heading");
    expect(await heading?.innerText()).toContain("Howdy");
  });
});
