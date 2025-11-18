import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const GH_USER = "f3rjara";
const REPO_NAME = "talent-match-landing";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	site: `https://${GH_USER}.github.io`,
	base: `/${REPO_NAME}`,
});
