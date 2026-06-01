import { FC, Suspense } from "react"
import { useParams } from "react-router"
import { OfflineViewerItemContainer} from "~services/offline-viewer/components"

interface OfflineViewerContentProps {
    type: "experiment" | "run"
}

const OfflineViewerContent: FC<OfflineViewerContentProps> = ({ type }) => {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return null
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OfflineViewerItemContainer type={type} id={id} />
        </Suspense>
    )
}

export default OfflineViewerContent
