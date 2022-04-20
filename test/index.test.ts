import { randomName } from "../lib/cjs/index.js";

test("randomName function", () => {
	expect(["Dwight", "Jim", "Michael", "Pam"]).toContain(randomName());
});
