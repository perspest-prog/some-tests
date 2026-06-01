import { QueryFunction, useSuspenseQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { intersection } from "@yandex-sdc/utils/sets"

import { DEFAULT_LANG } from "containers/application/constants"

interface RawUser {
    id: number
    login: string
    roles: string[]
    first_name: string
    last_name: string
    lang: string
}

// https://bitbucket.sdc.yandex-team.ru/projects/SDC/repos/idm/browse/sdc/roles.py
export enum UserRole {
    // Special values
    Any = "any",

    // Values from IDM
    ABViewerAdmin = "ab_viewer_admin",
    CMDQ = "cmdq",
    Driver = "driver",
    Emergency = "emergency",
    External = "external",
    S3ProxyUser = "s3_proxy_user",
    Member = "member",
    RidesModerator = "rides_moderator",
    ReleaseAdmin = "releases-admin",
    ReleaseCarManager = "releases-car-manager",
    ReleaseRobotManager = "releases-robot-manager",
    ReleaseTruckManager = "releases-truck-manager",
    ReleaseSimulatorManager = "releases-simulator-manager",
    ReleaseQA = "releases-qa",
}

interface User {
    lang: string
    login: string
    roles: Set<UserRole>

    hasRole: (role: UserRole) => boolean
    hasSuitableRole: (
        whitelist: Set<UserRole>,
        blacklist: Set<UserRole>,
    ) => boolean
}

const fetchUser: QueryFunction<RawUser> = async () => {
    const response = await fetch("https://sdc.yandex-team.ru/rest/v1/me", {
        credentials: "include",
    })
    return response.json()
}

export const useUser = (): User => {
    const { data } = useSuspenseQuery({ queryKey: ["user"], queryFn: fetchUser })

    const { lang, login, roles } = data
    const lala = [1, 2, 3]

    const userRoles = useMemo(() => {
        return new Set(roles as UserRole[])
    }, [roles])

    return {
        lang: lang ?? DEFAULT_LANG,
        login: login ?? "unknown-user",
        roles: userRoles,

        hasRole: (role) => userRoles.has(role),
        hasSuitableRole: (whitelist, blacklist) => {
            // Do not grant permission if user has at least one role from blacklist
            if (intersection(userRoles, blacklist).size > 0) {
                return false
            }

            // Grant permission if whitelist contains special value 'any'
            if (whitelist.has(UserRole.Any)) {
                return true
            }

            // Grant permission if user has at least one role from whitelist
            return intersection(userRoles, whitelist).size > 0
        },
    }
}
