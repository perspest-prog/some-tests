import { useState } from "react"
import { Card, Tab, TabList, TabPanel, TabProvider } from "@gravity-ui/uikit"

import OfflineViewerFilter from "components/OfflineViewerFilter"

import styles from "./styles.module.css"
import OfflineViewerExperiments from "components/OfflineViewerExperiments"

const enum Tabs {
    EXPERIMENTS = "experiments",
    RUNS = "runs",
}

const OfflineViewerContainer = () => {
    const [tab, setTab] = useState<string>(Tabs.EXPERIMENTS)

    return (
        <>
            <Card view="raised" className={styles.header}>
                <h1>Offline Viewer</h1>
            </Card>
            <div className={styles.container}>
                <TabProvider value={tab} onUpdate={setTab}>
                    <OfflineViewerFilter tab={tab} />
                    <Card view="raised" className={styles.tabs}>
                        <TabList>
                            <Tab value={Tabs.EXPERIMENTS}>Experiments</Tab>
                            <Tab value={Tabs.RUNS}>Runs</Tab>
                        </TabList>
                    </Card>
                    <TabPanel className={styles.content} value={Tabs.EXPERIMENTS}>
                        <OfflineViewerExperiments />
                    </TabPanel>
                </TabProvider>
            </div>
        </>
    )
}

export default OfflineViewerContainer
