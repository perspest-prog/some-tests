import { readFileSync } from "node:fs"
import { resolve } from "node:path"

import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react-swc"

import { getEnvironmentVariables } from "./src/lib/stats/getEnvironmentVariables"

export default defineConfig(({ mode }) => {
    const { HOST, SSL_KEY_FILE, SSL_CRT_FILE } = loadEnv(mode, process.cwd(), "")

    console.log(resolve(__dirname, "src", "containers"))

    return {
        plugins: [react()],
        define: {
            "build.env": JSON.stringify(getEnvironmentVariables()),
        },
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
        server: {
            host: HOST,
            port: 3000,
            https: {
                key: readFileSync(resolve(__dirname, SSL_KEY_FILE)),
                cert: readFileSync(resolve(__dirname, SSL_CRT_FILE)),
            },
        },
    }
})
