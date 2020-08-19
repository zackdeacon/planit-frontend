import React from 'react'

const contentStyle = {
    height: '160px',
    color: '#black',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.287)',
    fontSize: "24px",
    border: "solid",
    borderColor: "#736557"
  };

export default function CarouselContent(props) {
    return (
        <div>
      <h3 style={contentStyle}>{props.name}</h3>
    </div>
    )
}
