import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
// import { FaRegUser } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import MenuAccount from 'components/MenuAccount/MenuAccount';

import {
  HeaderBox,
  Promotion,
  PromotionText,
  HeaderBody,
  // MenuBtn,
  PageTitle,
  IconText,
  IconWraper,
  HeaderNav,
} from './Header.styled';

export const Header = () => {
  const [open, setOpen] = useState(false);
  // const notOpen = () => setOpen(!open);

  return (
    <HeaderBox>
      <Promotion>
        <PromotionText>
          Безкоштовна доставка за замовлення від 2000 грн
        </PromotionText>
        <GiShoppingCart style={{ width: '20px', height: '20px' }} />
      </Promotion>
      <HeaderBody>
        <IconWraper>
          {/* <MenuBtn type="button" onClick={() => setOpen(!open)}>
            {open ? (
              <IoClose style={{ width: '25px', height: '25px' }} />
            ) : (
              <GiHamburgerMenu style={{ width: '25px', height: '25px' }} />
            )}
          </MenuBtn> */}

          {open ? (
            <IoClose
              onClick={() => setOpen(!open)}
              style={{ width: '25px', height: '25px' }}
            />
          ) : (
            <IoMenu
              onClick={() => setOpen(!open)}
              style={{ width: '25px', height: '25px' }}
            />
          )}

          <IconText>Меню</IconText>
        </IconWraper>
        <NavLink to="/">
          <PageTitle>BORSA</PageTitle>
        </NavLink>
        <HeaderNav>
          <MenuAccount />
          {/* <NavLink to="/signUp">
            <IconWraper>
              <FaRegUser
                style={{ width: '20px', height: '20px', fill: '#222222' }}
              />
              <IconText>Акаунт</IconText>
            </IconWraper>
          </NavLink> */}
          <NavLink to="/">
            <IconWraper>
              <MdOutlineShoppingBasket
                style={{ width: '20px', height: '20px', fill: '#222222' }}
              />
              <IconText>Кошик</IconText>
            </IconWraper>
          </NavLink>
        </HeaderNav>

        {/* <HeaderNav>
          <IconWraper href="/">
            <FaRegUser
              style={{ width: '20px', height: '20px', fill: '#222222' }}
            />
            <IconText>Акаунт</IconText>
          </IconWraper>
          <IconWraper href="/">
            <MdOutlineShoppingBasket
              style={{ width: '20px', height: '20px', fill: '#222222' }}
            />
            <IconText>Кошик</IconText>
          </IconWraper>
        </HeaderNav> */}
      </HeaderBody>
    </HeaderBox>
  );
};
