import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { App } from "./App"
import { ErrorBoundary } from "react-error-boundary"

import "@gravity-ui/uikit/styles/fonts.css"
import "@gravity-ui/uikit/styles/styles.css"
import "./styles.scss"
import { ThemeProvider } from "@gravity-ui/uikit"
import { BrowserRouter } from "react-router"

window.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root")

    if (!rootElement) {
        throw new Error("Root element not found")
    }
    const root = createRoot(rootElement)
    const queryClient = new QueryClient()

    window.__TANSTACK_QUERY_CLIENT__ = queryClient

    root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary fallback={<div>Error</div>}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ThemeProvider theme="light">
                            <BrowserRouter>
                                <App />
                            </BrowserRouter>
                        </ThemeProvider>
                    </Suspense>
                </ErrorBoundary>
            </QueryClientProvider>
        </StrictMode>,
    )
})
