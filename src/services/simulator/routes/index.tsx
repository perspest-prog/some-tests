import { Route, Routes } from "react-router"
import PoolList from "~services/simulator/routes/PoolList"


const SimulatorRoutes = () => {
    return (
        <Routes>
            <Route index element={<PoolList />} />
        </Routes>
    )
}

export default SimulatorRoutes
