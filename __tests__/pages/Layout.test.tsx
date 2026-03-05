import fs from "fs";
import path from "path";

describe("Font configuration", () => {
  const srcDir = path.resolve(__dirname, "../../src");

  it("layout.tsx does not import from next/font/google", () => {
    const layoutSource = fs.readFileSync(
      path.join(srcDir, "app/layout.tsx"),
      "utf-8",
    );
    expect(layoutSource).not.toContain("next/font/google");
    expect(layoutSource).not.toContain("fonts.googleapis.com");
  });

  it("globals.css does not reference Google Fonts", () => {
    const cssSource = fs.readFileSync(
      path.join(srcDir, "app/globals.css"),
      "utf-8",
    );
    expect(cssSource).not.toContain("fonts.googleapis.com");
    expect(cssSource).not.toContain("fonts.gstatic.com");
  });

  it("globals.css uses a system font stack", () => {
    const cssSource = fs.readFileSync(
      path.join(srcDir, "app/globals.css"),
      "utf-8",
    );
    expect(cssSource).toContain("system-ui");
    expect(cssSource).toContain("sans-serif");
  });
});
