import React from 'react'
import { Carousel } from 'antd';
import CarouselContent from '../CarouselContent/CarouselContent';

function onChange(a, b, c) {
    console.log(a, b, c);
}



export default function MapCarousel(props) {
    console.log('props.maps', props.maps)
    return (
        <Carousel afterChange={onChange}>
            {props.maps.map(item => <CarouselContent key= {item._id} name={item.name} id={item._id}/>)}
        </Carousel>
    )
}
