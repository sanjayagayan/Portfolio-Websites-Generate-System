import React from 'react'

const CircleProgressBar = ({skillName,percentage}) =>{

  const circleWidth = 200;
  const radius = 65;
  const dashArray = radius * Math.PI * 2;
  const dashoffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div>
        <svg width={circleWidth} height={circleWidth} viewBox={`0 20 ${circleWidth} ${circleWidth + 20}`} className='pr-[20px]'>
            
            <defs>
                <linearGradient id='gradient'>
                    <stop offset="10%" stop-color="#FA124A"/>
                    <stop offset="50%" stop-color="#0072EE"/>
                    <stop offset="100%" stop-color="#0072EE"/>
                </linearGradient>
            </defs>
            <circle
                cx={circleWidth / 2}
                cy={circleWidth / 2}
                strokeWidth="15px"
                r={radius}
                className='fill-none'
                stroke='#17293F'>
            </circle>

            <circle
                cx={circleWidth / 2}
                cy={circleWidth / 2}
                strokeWidth="15px"
                r={radius}
                className='fill-none'
                strokeLinecap='round'
                strokeLinejoin='rund'
                style={{strokeDasharray:dashArray, strokeDashoffset:dashoffset}}
                transform={ `rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                stroke={`url(#gradient)`}
                />
            
            
            <text x="50%" y="50%" dy="0.2em" textAnchor='middle' className='text-4xl font-bold' fill='white'>
                {percentage}%
            </text>
            <text x="50%" y="50%" dy="4em" textAnchor='middle' className='text-2xl font-bold' fill='white'>
                {skillName}
            </text>
        </svg>   
    </div>
  )
}

export default CircleProgressBar;
