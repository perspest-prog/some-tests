import { BuildEnv } from "src/@types/globals"
import { getStats } from "./getStats"
import { Environment } from "./types"

export const getEnvValue = (name: keyof BuildEnv) => {
    const { env } = getStats()

    if (env === Environment.PRODUCTION) {
        return window.build.env[name]
    }

    const analytic_services_env = localStorage.getItem("analytic_services_env")

    try {
        const analytic_services_env_json = analytic_services_env
            ? JSON.parse(analytic_services_env)
            : {}

        return analytic_services_env_json?.[name] || window.build.env[name]
    }
    catch (e) {
        return window.build.env[name]
    }
}
