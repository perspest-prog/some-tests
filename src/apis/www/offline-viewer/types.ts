type FilterSingleValue = string
type FilterMultipleValue = string[]

export type OVFilterValue = FilterSingleValue | FilterMultipleValue | never[]

export type OVFilter = {
    experiment?: FilterSingleValue
    created_at__gte?: FilterSingleValue
    created_at__lte?: FilterSingleValue
    author?: OVFilterValue
    attributes__subscribers?: OVFilterValue
    attributes__branch?: OVFilterValue
    attributes__tags?: OVFilterValue
    attributes__dataset_name?: OVFilterValue
    attributes__branch_baseline?: OVFilterValue
    attributes__branch_interest?: OVFilterValue
    attributes__pr_data_pr_id?: OVFilterValue
    commit_hash?: OVFilterValue

    attributes__mode?: OVFilterValue
    attributes__pool_id?: OVFilterValue
    attributes__recipe_id?: OVFilterValue
    attributes__simulator_run_options__yt_pool?: OVFilterValue

    attributes__dataset?: OVFilterValue
    status?: OVFilterValue
    regular?: OVFilterValue
    attributes__open_loop_experiment_id?: OVFilterValue
}

export type OVFilterKey = keyof OVFilter
export type FilterSuggestKey = [stub: string, key: string, value: string, type: string]
export type OfflineViewerExperimentsKey = [stub: string, filters: OVFilter]

export const enum MetricsRunStatus {
    Running = "running",
    Ready = "ready",
    Outdated = "outdated",
    Wrong = "wrong",
    Failed = "failed",
    Waiting = "waiting",
    Enqueued = "enqueued",
}

export type MetricsExperimentsItem = {
    id: string
    name: string
    author: string
    regular: boolean
    status: MetricsRunStatus
    // attributes: Partial<MetricsExperimentsAttributes>
    created_at: string
    updated_at: string
    // metrics_runs: Array<MetricsRun>
}

export type MetricsExperiment = MetricsExperimentsItem

export type MetricsPageResult<T> = {
    count: number
    next: null | string
    previous: null | string
    results: Array<T>
}

export type MetricsExperimentPageResult = MetricsPageResult<MetricsExperiment>
