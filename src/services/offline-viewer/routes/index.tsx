import { lazy } from "react"
import { Route, Routes } from "react-router"

const OfflineViewerContent = lazy(() => import("./OfflineViewerContent"))

const OfflineViewerRoutes = () => {
    console.log("OfflineViewerRoutes")
    return (
        <Routes>
            <Route path="run/:id" element={<OfflineViewerContent type="run" />} />
        </Routes>
    )
}

export default OfflineViewerRoutes
