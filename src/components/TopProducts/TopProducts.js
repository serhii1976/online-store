import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bag from '../../images/bag.jpg';
import {
  TitleSlider,
  WraperSlider,
  ImageSlider,
  TitleItem,
  SizeItem,
} from './TopProducts.styled';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,

      appendDots: dots => (
        <div
          style={{
            backgroundColor: 'transparent',
            textAlign: 'end',
            top: '-30px',
          }}
        >
          <ul style={{ margin: '0px' }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <WraperSlider>
        <TitleSlider> Топ товари </TitleSlider>
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
      </WraperSlider>
    );
  }
}
