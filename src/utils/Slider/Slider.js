import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdFavoriteBorder, MdOutlineShoppingBasket } from 'react-icons/md';

import { products } from 'utils/TestProduct/TestProduct';

import {
  ImageSlider,
  TitleItem,
  SizeItem,
  ColorList,
  ColorItem,
  PriceBox,
  Price,
  FavoriteIcon,
  CardWraper,
  OldPrice,
} from './Slider.styled.js';

export default class SlickSlider extends Component {
  static defaultProps = {
    variant: '',
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
    };

    const { variant } = this.props;

    return (
      <div>
        <Slider {...settings}>
          {products.map(product => (
            <CardWraper key={product.id}>
              <FavoriteIcon>
                <MdFavoriteBorder style={{ fill: '#B2B0F7' }} />
              </FavoriteIcon>
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
                {variant === 'sale' && <OldPrice>{product.salePrice}</OldPrice>}
                <MdOutlineShoppingBasket
                  style={{
                    width: '25px',
                    height: '25px',
                    fill: '#222222',
                  }}
                />
                {/* {product.basket} */}
              </PriceBox>
            </CardWraper>
          ))}
        </Slider>
      </div>
    );
  }
}
