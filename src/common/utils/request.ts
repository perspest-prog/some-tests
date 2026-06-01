const TESTING = false

interface RequestOptions<D, R> {
    data: D
    method: "GET" | "POST" | "PUT" | "DELETE"
    signal?: AbortSignal
    delay?: number
    skipEmptyQuery?: boolean
    mock?: (data: D) => R
}

export const request = async <D, R>(pathname: string, { data, method, mock, signal, delay }: RequestOptions<D, R>): Promise<R> => {
    if (delay !== 0) {
        await new Promise((resolve) => setTimeout(resolve, delay))
    }

    if (TESTING) {
        if (mock) {
            return Promise.resolve(mock(data))
        }

        console.warn("Вы не замокали")
    }

    const url = new URL(pathname)

    if (method === "GET") {
        url.search = new URLSearchParams(data).toString()
    }

    try {
        const response = await fetch(url, { method, signal, credentials: "include" })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return response.json()
    }
    catch (error) {
        throw error
    }
}

class Client {
    constructor(private readonly url: string) {}

    public get<D, R>(options: RequestOptions<D, R>): Promise<R> {
        return request(this.url, options)
    }
}

export default Client

// /api/forms?recipe=closed_loop_from_pool_grap

interface Field {
    slug: string
    type: 'text' | 'select' | 'number'
    nesting_level: number // ???
}

interface Section {
    slug: string
    fields: Field[]
}

interface Preset {
    slug: string
}

interface Config {
    sections: Section[]
    presets: Preset[]
}

const data = {
    head: ['lala', 'foo', 'bar'],
    body: {

    }
}
