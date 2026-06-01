import { getEnvValue } from "lib/stats/getEnvValue"

export function getSimulatorHost(pathname = ""): string {
    const simulatorUrl = new URL(getEnvValue("SIMULATOR_URL"))
    simulatorUrl.pathname = pathname

    return simulatorUrl.toString()
}
