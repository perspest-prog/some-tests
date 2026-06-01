import { getHosts } from "../../../.config/hosts"

import { BuildEnv } from "../../@types/globals"
import { getStats } from "./getStats"
import { Environment } from "./types"

const { env, version } = getStats()

export const getEnvironmentVariables = (): BuildEnv => {
    return {
        IS_PRODUCTION_BUILD:
      env === Environment.PRODUCTION || env === Environment.PRESTABLE,
        PUBLIC_URL: "",
        VERSION: version,
        ...getHosts(env),
    }
}
