import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"


import { App } from "./App"

import "@gravity-ui/uikit/styles/fonts.css"
import "@gravity-ui/uikit/styles/styles.css"
import "./styles.scss"
import { BrowserRouter } from "react-router"

window.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root")

    if (!rootElement) {
        throw new Error("Root element not found")
    }

    const root = createRoot(rootElement)

    root.render(
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    )
})
