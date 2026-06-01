import { useOfflineViewerFilter } from "components/OfflineViewerFilter"
import classes from "./styles.module.css"
import { useEffect } from "react"
import { useOfflineViewerExperiments } from "apis/www/offline-viewer/query"
import { Card } from "@gravity-ui/uikit"
import classNames from "classnames"

const OfflineViewerExperiments = () => {
    const { filters } = useOfflineViewerFilter()
    const { data, isFetching } = useOfflineViewerExperiments(filters)

    console.log(data)

    useEffect(() => {
        console.log(filters)
    }, [filters])

    return (
        <div className={classes.container}>
            <Card view="raised" className={classNames(classes.head, classes.row)}>
                <span>Experiments</span>
                <span>Branch or commit</span>
                <span>Pool</span>
                <span>Author</span>
                <span>Status</span>
            </Card>
            {data.map((experiment) => (
                <Card view="raised" className={classes.row}>
                    <span>{experiment.name}</span>
                    <span>{123}</span>
                    <span>{456}</span>
                    <span>{experiment.author}</span>
                    <span>{experiment.status}</span>
                </Card>
            ))}
        </div>
    )
}

export default OfflineViewerExperiments
