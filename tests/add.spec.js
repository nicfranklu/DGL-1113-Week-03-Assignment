import exp from "constants";
import path from "path";

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "../docs/index.html")}`;
    await page.setViewport({'width': 1920, 'height': 1080 });
    await page.goto(URL);
  });

  it("add 3 activities", async () => {
    await page.type( '#description', 'eat')
    await page.click('#add');

    await page.evaluate( () => document.getElementById("description").value = "")
    await page.type( '#description', 'sleep')
    await page.click('#add');

    await page.evaluate( () => document.getElementById("description").value = "")
    await page.type( '#description', 'study')
    await page.click('#add');

    await page.waitForSelector('#activitylog');
    let elements = await page.$$('#activitylog li');
    expect( elements.length).toBe(3);
    let value = await page.evaluate(el => el.innerText, elements[0]);
    value = value.trim();
    expect(value).toMatch(/eat$/);
    value = await page.evaluate(el => el.innerText, elements[1]);
    value = value.trim();
    expect(value).toMatch(/sleep$/);
    value = await page.evaluate(el => el.innerText, elements[2]);
    value = value.trim();
    expect(value).toMatch(/study$/);
  });
});
