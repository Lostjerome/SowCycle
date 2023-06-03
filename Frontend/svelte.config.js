import adapter from "sveltekit-adapter-firebase";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            outDir: "build",
            functionName: "handler", //needs to correspond to function hosting.rewrites[0].function property in firebase.json
            nodeVersion: "18", // '16' or '14'
            version: "v2", // 'v1' or 'v2'
            functionOptions: {
                // functionOptions are only available in v2
                concurrency: 500, // max. 1000
            },
        }),
        alias: {
            // this will match a file
            "@config": "./src/config",
            "@components": "./src/components",
            "@css": "./src/app.css",
            "@lib": "./src/lib",
            "@routes": "./src/routes",
            "@stores": "./src/stores",
            "@utils": "./src/utils",
            "@validations": "./src/validations",
            "@views": "./src/views",
            "@styles": "./src/styles",
            "@images": "./src/images",
            "@icons": "./src/icons",
            "@fonts": "./src/fonts",
            "@static": "./src/static",
            "@types": "./src/types",
        },
    },
};

export default config;
