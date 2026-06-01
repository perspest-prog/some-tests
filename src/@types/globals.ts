export interface BuildEnvHosts {
    toolsFrontend: string
    WWW_URL: string
    REST: string
    SIMULATOR_URL: string
    REST_SERVER: string
    TOOLS_HOST: string
    TIMETABLE_URL: string
    DRIVERS_URL: string
    INVENTORY_URL: string
    STARTREK_URL: string
    REMOTE_CONTROL_URL: string
    AUTH_ADMIN_URL: string
    TILE_SERVICE_URL: string
    S3_URL: string
    ROOTFS_UPDATER_URL: string
    EMBEDDED_URL: string
    METRIKA_COUNTER_ID: string
    YMAPS_API_KEY: string
}

export interface BuildEnv extends BuildEnvHosts {
    IS_PRODUCTION_BUILD: boolean
    PUBLIC_URL: string
    VERSION: string
}
