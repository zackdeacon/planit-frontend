import React from 'react'
import { Carousel } from 'antd';
import CarouselContent from '../CarouselContent/CarouselContent';
import "./map-carousel.css"

export default function MapCarousel(props) {
    const { maps, editable } = props;
    let carouselItems;
    if (maps.length > 0) {
        carouselItems = maps.map(map => {
            return <CarouselContent key={map._id} name={map.name} id={map._id} categories={map.suggestionCategories} editable={editable} background={props.background}/>
        });
    } else {
        carouselItems = <CarouselContent name="None to display" categories={[]} empty={true} editable={editable} background={props.background}/>
    }

    return (
        <>
            <h2>{props.header}</h2>
            <Carousel autoplay >
                {carouselItems}
            </Carousel>
        </>
    )
}
