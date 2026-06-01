import { useQuery, useQueryClient } from "@tanstack/react-query"

import { getSimulatorPool } from "./request"
import { SimulatorPoolItemKey } from "./types"

function getSimulatorPoolQueryKey(id: number): SimulatorPoolItemKey {
    return ["pool", id]
}

export function useSimulatorPool(id: number) {
    return useQuery({
        queryKey: getSimulatorPoolQueryKey(id),
        queryFn: getSimulatorPool,
    })
}
