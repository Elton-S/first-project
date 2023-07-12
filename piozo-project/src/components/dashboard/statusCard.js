import React from 'react'

// import './statuscard.css'

const StatusCard = props => {
    return (
        <div className=''>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="min-w-0 flex-1">
                <h4 className='text-sm font-medium text-gray-900'>{props.count}</h4>
                <span className='truncate text-sm text-gray-500'>{props.title}</span>
            </div>
        </div>
    )
}

export default StatusCard
