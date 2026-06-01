import { FC, useEffect, useRef } from "react"

interface SentinelProps {
    callback: () => void
}

const Sentinel: FC<SentinelProps> = ({ callback }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([first]) => {
            if (first.isIntersecting) {
                callback()
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [callback])

    return <div ref={ref} />
}

export default Sentinel
