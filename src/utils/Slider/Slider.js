import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { products } from 'utils/TestProduct/TestProduct';

import {
  ImageSlider,
  TitleItem,
  SizeItem,
  ColorList,
  ColorItem,
  PriceBox,
  Price,
} from './Slider.styled.js';

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
          {products.map(product => (
            <div key={product.id}>
              <ImageSlider src={product.image} alt="bag" />
              <>
                <ColorList>
                  {product.color.map((item, index) => (
                    <ColorItem
                      key={index}
                      style={{ backgroundColor: item }}
                    ></ColorItem>
                  ))}
                </ColorList>
              </>
              <TitleItem>{product.title}</TitleItem>
              <SizeItem>{product.size}</SizeItem>
              <PriceBox>
                <Price>{product.price}</Price>
                {product.basket}
              </PriceBox>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
