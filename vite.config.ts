import { readFileSync } from "node:fs"
import { resolve } from "node:path"

import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react-swc"


export default defineConfig(({ mode }) => {
    return {
        plugins: [react()],
        resolve: {
            alias: {
                common: resolve(__dirname, "src", "common"),
                '~services': resolve(__dirname, "src", "services"),
                apis: resolve(__dirname, "src", "apis"),
                components: resolve(__dirname, "src", "components"),
                containers: resolve(__dirname, "src", "containers"),
                lib: resolve(__dirname, "src", "lib"),
            },
        },
    }
})
