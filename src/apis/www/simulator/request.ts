import { QueryFunction } from "@tanstack/react-query"

import { SimulatorPoolItem, SimulatorPoolItemKey } from "./types"
import { getSimulatorHost } from "./helpers"

export const getSimulatorPool: QueryFunction<
    SimulatorPoolItem,
    SimulatorPoolItemKey
> = async ({ queryKey }) => {
    const [, id] = queryKey

    return fetch(getSimulatorHost(`/api/pool/${id}`), {
    // credentials: "include",
    }).then((res) => res.json())
}
