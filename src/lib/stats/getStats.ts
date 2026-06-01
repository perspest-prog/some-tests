import { Environment, Yenv } from "./types"

interface Stats {
    env: Environment
    version: string
}

const getEnvironmentFromEnv = (yenv: Yenv): Environment => {
    switch (yenv) {
        case "beta":
            return Environment.BETA
        case "unstable":
            return Environment.TESTING
        case "prestable":
            return Environment.PRESTABLE
        case "stable":
            return Environment.PRODUCTION
        default:
            return Environment.DEVELOPMENT
    }
}

export const getStats = (): Stats => {
    const version = "local"
    const env = getEnvironmentFromEnv(process.env.YENV)

    return { version, env }
}
