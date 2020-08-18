import React from 'react'
import { Carousel } from 'antd';
import CarouselContent from '../CarouselContent/CarouselContent';
import "./map-carousel.css"





export default function MapCarousel(props) {
    console.log('props.maps', props.maps)
    return (
        <Carousel autoplay >
            {props.maps.map(item => <CarouselContent key= {item._id} name={item.name} id={item._id} />)}
        </Carousel>
    )
}
