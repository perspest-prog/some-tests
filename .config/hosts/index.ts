import { Environment } from "../../src/lib/stats/types"
import productionHosts from "./production.json"
import preprodHosts from "./preprod.json"
import testingHosts from "./testing.json"
import { BuildEnvHosts } from "../../src/@types/globals"

const appendHost = (conf: BuildEnvHosts) => {
    return Object.entries(conf).reduce<BuildEnvHosts>((acc, [key, val]) => {
    // @ts-ignore
        acc[key] = val

        return acc
    }, {} as BuildEnvHosts)
}

export const getHosts = (env: Environment) => {
    switch (env) {
        case Environment.PRODUCTION:
            return appendHost(productionHosts)
        case Environment.PRESTABLE:
            return appendHost(preprodHosts)
        default:
            return appendHost(testingHosts)
    }
}
