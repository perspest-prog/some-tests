import { keepPreviousData, useQuery, useSuspenseInfiniteQuery } from "@tanstack/react-query"
import { FilterSuggestKey, OfflineViewerExperimentsKey, OVFilter } from "./types"
import { fetchFilterSuggest, fetchOfflineViewerExperiments } from "./request"

export enum OVRouteTypes {
    Experiment = "experiment",
    Run = "run",
    Regular = "regular",
}

function getFilterSuggestKey(key: string, value: string, type: OVRouteTypes): FilterSuggestKey {
    return ["offline-viewer/suggest", key, value, type]
}

export function useFilterSuggest(
    { key, value, type }: { key: string, value: string, type: OVRouteTypes },
) {
    return useQuery({
        queryKey: getFilterSuggestKey(key, value, type),
        queryFn: fetchFilterSuggest,
        placeholderData: keepPreviousData,
    })
}

function getOfflineViewerExperimentsKey(filters: OVFilter): OfflineViewerExperimentsKey {
    return ["offline-viewer/experiments", filters]
}

const LIMIT = 20

export function useOfflineViewerExperiments(filters: OVFilter) {
    const { data, isFetching, fetchNextPage } = useSuspenseInfiniteQuery({
        queryKey: getOfflineViewerExperimentsKey(filters),
        queryFn: fetchOfflineViewerExperiments,

        // Variant 2
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => lastPageParam + 1,

        select: (data) => data.pages.flatMap((page) => page.results),
    })

    return { data, isFetching, fetchNextPage }
}
