import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bag from '../../images/bag.jpg';
import { ImageSlider, TitleItem, SizeItem } from './Slider.styled.js';

export default class SlickSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <ImageSlider src={bag} alt="bag" />
            <TitleItem>Сумка багет</TitleItem>
            <SizeItem>26.5см*40см*14см</SizeItem>
          </div>
          <div>
            <ImageSlider src={bag} alt="bag" />
            <TitleItem>Сумка багет</TitleItem>
            <SizeItem>26.5см*40см*14см</SizeItem>
          </div>
          <div>
            <ImageSlider src={bag} alt="bag" />
            <TitleItem>Сумка багет</TitleItem>
            <SizeItem>26.5см*40см*14см</SizeItem>
          </div>
          <div>
            <ImageSlider src={bag} alt="bag" />
            <TitleItem>Сумка багет</TitleItem>
            <SizeItem>26.5см*40см*14см</SizeItem>
          </div>
          <div>
            <ImageSlider src={bag} alt="bag" />
            <TitleItem>Сумка багет</TitleItem>
            <SizeItem>26.5см*40см*14см</SizeItem>
          </div>
          <div>
            <ImageSlider src={bag} alt="bag" />
            <TitleItem>Сумка багет</TitleItem>
            <SizeItem>26.5см*40см*14см</SizeItem>
          </div>
          <div>
            <ImageSlider src={bag} alt="bag" />
            <TitleItem>Сумка багет</TitleItem>
            <SizeItem>26.5см*40см*14см</SizeItem>
          </div>
          <div>
            <ImageSlider src={bag} alt="bag" />
            <TitleItem>Сумка багет</TitleItem>
            <SizeItem>26.5см*40см*14см</SizeItem>
          </div>
          <div>
            <ImageSlider src={bag} alt="bag" />
            <TitleItem>Сумка багет</TitleItem>
            <SizeItem>26.5см*40см*14см</SizeItem>
          </div>
        </Slider>
      </div>
    );
  }
}
