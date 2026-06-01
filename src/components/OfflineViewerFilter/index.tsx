import { Button, Card } from "@gravity-ui/uikit"
import { FC } from "react"

import styles from "./styles.module.css"
import { create } from "zustand"
import { RangeDatePicker } from "@gravity-ui/date-components"
import { OVRouteTypes } from "apis/www/offline-viewer/query"
import OfflineViewerSuggest from "components/OfflineViewerSuggest"
import { OVFilter } from "apis/www/offline-viewer/types"

interface OfflineViewerFilterProps {
    tab: string
}

interface FilterStore {
    filters: OVFilter
    setFilter: <T extends keyof OVFilter>(key: T, value: OVFilter[T]) => void
    clearFilters: () => void
}

export const useOfflineViewerFilter = create<FilterStore>((set) => ({
    filters: {},
    setFilter: (key, value) => set((state) => ({ filters: { ...state.filters, [key]: value } })),
    clearFilters: () => set({ filters: {} }),
}))

const OfflineViewerFilter: FC<OfflineViewerFilterProps> = ({ tab }) => {
    const date = useOfflineViewerFilter((state) => state.date)
    return (
        <Card view="raised" className={styles.container}>
            <div>
                <span>Filters</span>
                <Button value="123" />
            </div>
            <RangeDatePicker hasClear onUpdate={console.dir} size="l" />
            <OfflineViewerSuggest label="Branch" multuple itemKey="attributes__branch" type={OVRouteTypes.Run} />
            <OfflineViewerSuggest label="Tags" multuple itemKey="attributes__tags" type={OVRouteTypes.Run} />
        </Card>
    )
}

export default OfflineViewerFilter
