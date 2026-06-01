import { useEffect, FC } from "react"

interface TitlePros {
    title: string
}

const Title: FC<TitlePros> = ({ title }) => {
    useEffect(() => {
        document.title = title
    }, [title])

    return null
}

export default Title
