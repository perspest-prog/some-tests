export {}

declare global {
    interface Window {
        __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient

        build: {
            env: import("src/@types/globals").BuildEnv
        }
    }
}
