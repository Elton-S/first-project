import React from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import StatusCard from './statusCard'

import Table from './table'

import Badge from './badge'

import statusCards from '../../assets/JsonData/status-card-data.json'


const chartOptions = {
    series: [{
        name: 'Power Generated',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Voltage Stored',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    },{
        name: 'Current Generated',
        data: [10,20,30,49,60,49,89,30,23,10,78,23]
    }

],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'Location',
        'Total Power(W/s)',
        'Total Voltage(V/s)',
        'Total Current(A/s)'
    ],
    body: [
        {
            "Location": "Kotei",
            "Total_Power": "490",
            "Total_Voltage": "15,870",
            "Total_Current":"2000"
        },
        {
            "Location": "Boadi",
            "Total_Power": "250",
            "Total_Voltage": "12,251",
            "Total_Current":"2000"
        },
        {
            "Location": "Casley Hayford",
            "Total_Power": "120",
            "Total_Voltage": "10,840",
            "Total_Current":"2000"
        },
        {
            "Location": "Conti Bus Stop",
            "Total_Power": "110",
            "Total_Voltage": "9,251",
            "Total_Current":"2000"
        },
        {
            "Location": "Tech Junctionr",
            "Total_Power": "80",
            "Total_Voltage": "8,840",
            "Total_Current":"2000"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.Location}</td>
        <td>{item.Total_Power}</td>
        <td>{item.Total_Voltage}</td>
        <td>{item.Total_Current}</td>
    </tr>
)

const latestOrders = {
    header: [
        "id",
        "Power_Generated",
        "Voltage_Generated",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            Power_Generated: "100W",
            date: "17 Jun 2021",
            Voltage_Generated: "50V",
            status: "Low"
        },
        {
            id: "#OD1712",
            Power_Generated: "200W",
            date: "1 Jun 2021",
            Voltage_Generated: "40.3",
            status: "Low"
        },
        {
            id: "#OD1713",
            Power_Generated: "400W",
            date: "27 Jun 2021",
            Voltage_Generated: "220V",
            status: "Moderate"
        },
        {
            id: "#OD1712",
            Power_Generated: "100W",
            date: "1 Jun 2021",
            Voltage_Generated: "0.3V",
            status: "Critically low"
        },
        {
            id: "#OD1713",
            Power_Generated: "3000W",
            date: "27 Jun 2021",
            Voltage_Generated: "1500V",
            status: "Standard"
        }
    ]
}

const orderStatus = {
    "Moderate": "primary",
    "low": "warning",
    "Standard": "success",
    "critcally low": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.Power_Generated}</td>
        <td>{item.Voltage_Generated}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    // const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <div className='mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8'>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h2>
            </div>

            <div className="mx-auto max-w-7x1 sm:px-6 lg:px-8">
                <div className="col-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {
                            statusCards.map((item, index) => (
                                <div className='relative flex items-center space-x-3 rounded-lg border border-gray-400' key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="card full-height">
                        {/* chart
                        <Chart/> */}
                        <Chart options={chartOptions.options} series={chartOptions.series} type='line' width={500}/>

                    </div>
                    <div>
                    <Chart options={chartOptions.options} series={chartOptions.series} type='bar' width={500}/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="sm:flex-auto">
                            <h2 className='text-base font-semibold leading-6 text-gray-900'>Top Producers</h2>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="text-indigo-600 hover:text-indigo-900 hover:cursor-pointer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="text-base font-semibold leading-6 text-gray-900">
                            <h3>Latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="text-indigo-600 hover:text-indigo-900 hover:cursor-pointer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
