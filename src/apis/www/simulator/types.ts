export type SimulatorPoolItemKey = ["pool", number]

export interface SimulatorPoolItem {
    item: {
        id: string
        storageMeta: {
            createdTimestamp: string
            updatedTimestamp: string
            deleted: boolean
            testcaseCount: number
            withMarkup: number
            version: number
        }
        config: Record<string, string>
        meta: {
            name: string
            description: string
            startrekTicket: string
            ownerLogin: string
            ownerUid: string
            tags: string[]
            slug: string
            hidden: boolean
        }
    }
}
