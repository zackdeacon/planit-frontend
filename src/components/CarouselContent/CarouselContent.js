import React from 'react'
import { Link } from 'react-router-dom';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#6C8E98',
  fontSize: "24px",
  border: "solid",
  borderColor: "#fff"
};

const linkStyle = {
  color: "inherit",
  textDecoration: "inherit",
}

export default function CarouselContent(props) {
  return (
    <div>
      {props.empty ? (
        <h3 style={contentStyle}>{props.name}</h3>
      ) : (
          <h3 style={contentStyle}>
            <Link style={linkStyle} to={`/dashboard/${props.id}`}>{props.name}</Link>
          </h3>
        )
      }
    </div>
  )
}
