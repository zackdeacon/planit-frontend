import React from 'react'

const contentStyle = {
    height: '160px',
    color: '#black',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#6eb0b4',
  };

export default function CarouselContent(props) {
    return (
        <div>
      <h3 style={contentStyle}>{props.name}</h3>
    </div>
    )
}
