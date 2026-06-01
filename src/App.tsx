import {ThemeProvider} from '@gravity-ui/uikit'
import {Chart, ChartData} from '@gravity-ui/charts'

Date.now()

const data: ChartData = {
    "series": {
        "data": [
            {
                "type": "x-range",
                "name": "Design",
                "dataLabels": {
                    "enabled": true
                },
                "data": [
                    {
                        "x0": 1704067200000,
                        "x1": 1705276800000,
                        "y": 0,
                        "label": "Discovery"
                    },
                    {
                        "x0": 1709251200000,
                        "x1": 1710892800000,
                        "y": 0,
                        "label": "UI Polish"
                    }
                ]
            },
            {
                "type": "x-range",
                "name": "Frontend",
                "opacity": 0.75,
                "dataLabels": {
                    "enabled": true
                },
                "data": [
                    {
                        "x0": 1704844800000,
                        "x1": 1707523200000,
                        "y": 1,
                        "label": "Prototype"
                    },
                    {
                        "x0": 1706140800000,
                        "x1": 1710028800000,
                        "y": 1,
                        "label": "Components"
                    },
                    {
                        "x0": 1710460800000,
                        "x1": 1711929600000,
                        "y": 1,
                        "label": "Integration"
                    }
                ]
            },
            {
                "type": "x-range",
                "name": "Backend",
                "dataLabels": {
                    "enabled": true
                },
                "data": [
                    {
                        "x0": 1704412800000,
                        "x1": 1706745600000,
                        "y": 2,
                        "label": "API Design"
                    },
                    {
                        "x0": 1707955200000,
                        "x1": 1711929600000,
                        "y": 2,
                        "label": "Implementation"
                    }
                ]
            },
            {
                type: 'x-range',
                name: 'Empty',
                data: [{x0: 0, x1: 0, y: 'lalala'}]
            }
        ]
    },
    "xAxis": {
        "type": "datetime",
    },
    "yAxis": [
        {
            "type": "category",
            "categories": [
                "SpongeBob",
                "Patrick",
                "Squidward",
                'lalala'
            ],
            order: "reverse",
            grid: {
                /**
         * Enable or disable the grid lines.
         * @default true
         */
                enabled: false
            }
        }
    ]
}

export function App() {
    console.log((new Intl.DurationFormat()).format({months: 100}))
    return (
        <ThemeProvider theme="light">
            <div style={{height: 300}}>
                <Chart data={data} />
            </div>
        </ThemeProvider>
    )
}

new Date().getMilliseconds()
