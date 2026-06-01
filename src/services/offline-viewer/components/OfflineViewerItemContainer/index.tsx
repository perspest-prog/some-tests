import { FC } from "react"

import { OfflineViewerItemHeader } from "~services/offline-viewer/components"

import classes from "./styles.module.css"

interface OfflineViewerItemContainerProps {
    type: "experiment" | "run" | "custom"
    id: string
}

const OfflineViewerItemContainer: FC<OfflineViewerItemContainerProps> = ({ type, id }) => {
    return (
        <div className={classes.container}>
            <OfflineViewerItemHeader type={type} id={id} />
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default OfflineViewerItemContainer
