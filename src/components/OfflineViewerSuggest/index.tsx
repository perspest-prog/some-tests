import { Select } from "@gravity-ui/uikit"
import { FC, useEffect, useState } from "react"
import { OVRouteTypes, useFilterSuggest } from "apis/www/offline-viewer/query"
import { useOfflineViewerFilter } from "components/OfflineViewerFilter"
import { OVFilter } from "apis/www/offline-viewer/types"

interface OfflineViewerSuggestProps {
    label: string
    itemKey: keyof OVFilter
    type: OVRouteTypes
    multuple?: boolean
}

const OfflineViewerSuggest: FC<OfflineViewerSuggestProps> = ({ label, itemKey, type, multuple }) => {
    const [filter, setFilter] = useState<string>("")
    const [selected, setSelected] = useState<string[]>([])
    const { data } = useFilterSuggest({ key: itemKey, value: filter, type })
    const { setFilter: setOfflineViewerFilter } = useOfflineViewerFilter()

    useEffect(() => {
        setOfflineViewerFilter(itemKey, selected)
    }, [itemKey, selected, setOfflineViewerFilter])

    return (<div>
        <div>
            <span>{label}</span>
        </div>
        <Select
            width="max"
            filterable
            multiple={multuple}
            hasCounter={multuple && selected.length > 0}
            onUpdate={setSelected}
            hasClear
            filter={filter}
            size="l"
            onFilterChange={setFilter}
            options={data?.map((item) => ({ value: item, content: item }))}
        />
    </div>
    )
}

export default OfflineViewerSuggest
