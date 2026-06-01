import { QueryFunction } from "@tanstack/react-query"

import { FilterSuggestKey, MetricsExperimentPageResult, OfflineViewerExperimentsKey } from "./types"
import { request } from "common/utils"

const url = "https://sdc.yandex-team.ru/rest"

export const fetchFilterSuggest: QueryFunction<string[], FilterSuggestKey> = ({ queryKey }) => {
    const [, key, value, type] = queryKey

    return request(url + `/offline_viewer/${type === "experiment" ? "metrics_experiment" : "metrics_run"}/suggest`, { method: "GET", data: { [key]: value } })
}

export const fetchOfflineViewerExperiments: QueryFunction<MetricsExperimentPageResult, OfflineViewerExperimentsKey, number> = ({ queryKey, pageParam }) => {
    const [, filters] = queryKey

    return request(url + `/offline_viewer/metrics_experiment`, { method: "GET", data: { ...filters, page: pageParam } })
}
