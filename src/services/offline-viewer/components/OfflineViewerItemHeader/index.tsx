import { FC } from "react"
import { Button, Card } from "@gravity-ui/uikit"
import { ArrowLeft } from '@gravity-ui/icons'

import classes from "./styles.module.css"

interface OfflineViewerItemHeaderProps {
    type: "experiment" | "run" | "custom"
    id: string
}

const OfflineViewerItemHeader: FC<OfflineViewerItemHeaderProps> = ({ type, id }) => {
    return (
        <Card className={classes.header} view="raised">
            <div>
                <Button view="flat">
                    <Button.Icon>
                        <ArrowLeft />
                    </Button.Icon>
                </Button>
            </div>
            <div>
                <Button view="flat" title="lala">
                    <Button.Icon>
                        <ArrowLeft />
                    </Button.Icon>
                </Button>
            </div>
        </Card>
    )
}

export default OfflineViewerItemHeader
