import React from "react";
import styled, { css } from "styled-components";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { AppContext } from "../../hooks/app-context";

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  font-size: 26px;
  border-bottom: 1px solid #d2d2d2;
`;

const OutSideAnchor = styled.a`
  cursor: pointer;
  color: #067df7;
  text-decoration: none;
  font-size: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  padding-left: 50px;
`;

const ListElement = styled.li`
  float: left;
  height: 64px;

  ${({ last }) =>
    last &&
    css`
      float: right;
    `}
`;

const CartLogo = styled.div`
  position: relative;
  padding-right: 50px;
  height: 64px;
  line-height: 64px;
  vertical-align: middle;
`;

const StyledSvg = styled.svg`
  cursor: pointer;

  :hover #cart-icon-path {
    fill: #c19579;
  }
`;

const CartSizeBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 10px;
  height: 16px;
  line-height: 17px;
  vertical-align: middle;
  text-align: center;
  padding: 0 4px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #d4aa63;
`;

const openInNewTab = (url) => {
  let win = window.open(url, "_blank");
  win.focus();
};

const Header = () => {
  const { cart } = React.useContext(AppContext);

  const calcedCartList = React.useMemo(() => {
    // Could be better shape in context
    // Could be memoized
    const cartList = [];

    cart.forEach((cartItem) => {
      const targetCartListItemItem = cartList.find(
        (cartListItem) => cartListItem.name === cartItem.name
      );

      if (targetCartListItemItem) {
        targetCartListItemItem.count++;
      } else {
        cartList.push({
          name: cartItem.name,
          count: 1,
        });
      }
    });

    return cartList;
  }, [cart]);

  const popover = React.useMemo(
    () => (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Your Cart</Popover.Title>
        <Popover.Content>
          {calcedCartList.length > 0
            ? calcedCartList.map((item) => (
                <div key={item.name}>{`${item.name} x ${item.count}`}</div>
              ))
            : "No Items"}
        </Popover.Content>
      </Popover>
    ),
    [calcedCartList]
  );

  return (
    <Container>
      <List>
        <ListElement>
          <OutSideAnchor
            onClick={() => openInNewTab("https://www.saatva.com/")}
          >
            <svg
              name="saatvaLogo"
              className="icon icon--saatvaLogo nav__saatvaLogo"
              role="img"
              alt="Saatva Logo"
              description="Saatva Logo"
              viewBox="0 0 180 38.3"
              width="107"
              height="64"
              aria-labelledby="saatvaLogo"
              fill="#c19579"
            >
              <title id="saatvaLogo">Saatva Logo</title>
              <path d="M59.8,37.5h-4.9v-4.8c-2.4,3.5-6.4,5.6-10.7,5.6c-8.5,0-15.4-7-15.4-16.2c0-9.3,7-16.3,15.5-16.3c8.8,0,15.5,7.1,15.5,16.3L59.8,37.5z M44.4,10.5c-5.8,0-10.4,5.1-10.4,11.6s4.7,11.5,10.4,11.5c5.7,0,10.4-5.1,10.4-11.5C54.8,15.7,50,10.5,44.4,10.5z"></path>
              <path d="M96.3,37.5h-4.9v-4.8c-2.4,3.5-6.4,5.6-10.7,5.6c-8.5,0-15.4-7-15.4-16.2c0-9.3,7-16.3,15.5-16.3c8.8,0,15.5,7.1,15.5,16.3L96.3,37.5z M80.8,10.5c-5.8,0-10.4,5.1-10.4,11.6s4.7,11.5,10.4,11.5c5.7,0,10.4-5.1,10.4-11.5C91.3,15.7,86.5,10.5,80.8,10.5z"></path>
              <path d="M115,37.5c-7.2,0.8-12.2-3.4-12.2-11.3V0h5v6.6h7v4.9h-7v14.8c0,5.5,3.3,6.8,7.1,6.6V37.5z"></path>
              <path d="M119.2,6.6h5.4l8.5,24.1h0.1l8.5-24.1h5.4l-11.2,30.9h-5.5L119.2,6.6z"></path>
              <path d="M180,37.5h-4.9v-4.8c-2.4,3.5-6.4,5.6-10.7,5.6c-8.5,0-15.4-7-15.4-16.2c0-9.3,7-16.3,15.5-16.3c8.8,0,15.5,7.1,15.5,16.3V37.5z M164.5,10.5c-5.8,0-10.4,5.1-10.4,11.6s4.7,11.5,10.4,11.5c5.7,0,10.4-5.1,10.4-11.5C175,15.7,170.2,10.5,164.5,10.5z"></path>
              <path d="M0,33.2c3.6,3.2,8.2,5,13,4.9c6.8,0,11.2-3.7,11.2-9.3v-0.1c0-4.8-2.8-7.4-10-9.1c-6-1.4-7.6-2.5-7.6-5.1v-0.1c0-2.3,2.2-3.9,5.3-3.9c3.1,0.1,6.1,1.2,8.5,3.2l2.8-4C20,7.2,16,5.8,11.9,5.9c-6.3,0-10.7,3.7-10.7,9V15c0,5.7,3.7,7.7,10.4,9.3c5.5,1.3,7.2,2.4,7.2,5v0.1c0,2.5-2.3,4.1-5.7,4.1c-3.6,0-6.7-1.3-10-4.1L0,33.2z"></path>
            </svg>
          </OutSideAnchor>
        </ListElement>
        <ListElement last>
          <CartLogo>
            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
              <StyledSvg
                name="cart"
                className="icon icon--cart"
                role="img"
                alt="cart icon"
                description="Cart"
                viewBox="0 0 25 25"
                width="25"
                height="25"
                aria-labelledby="cartIcon"
              >
                <title id="cartIcon">Cart</title>
                <path
                  id="cart-icon-path"
                  d="M24.6,5.9c-0.3-0.3-0.7-0.6-1.1-0.6l-18.1-2V3.1C5.2,1.4,3.9,0,2.6,0h-2C0.2,0,0,0.2,0,0.5 C0,0.8,0.2,1,0.5,1h2c0.8,0,1.6,1,1.8,2.1l0.8,8.2c0.1,1.5-0.2,3-0.8,4.4c-0.4,0.6-0.4,1.3,0,1.9c0.5,0.7,1.3,1,2.1,0.9h16.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H6.3c-0.4,0.1-0.9-0.1-1.1-0.4c-0.1-0.3-0.1-0.6,0.1-0.9c0.3-0.5,0.5-1.1,0.7-1.7H22c0.9,0,1.6-0.6,1.8-1.4l1.1-6C25,6.7,24.9,6.2,24.6,5.9L24.6,5.9z M22.8,12.9c-0.1,0.3-0.4,0.6-0.7,0.6H6.1c0.1-0.7,0.2-1.5,0.1-2.2L5.5,4.3l17.9,2c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.1,0.3L22.8,12.9L22.8,12.9z M19.8,24.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3S21.1,24.2,19.8,24.2z M19.8,20.6c-0.5,0-0.9,0.2-1.1,0.6s-0.2,0.9,0,1.3s0.7,0.6,1.1,0.6c0.7,0,1.3-0.6,1.3-1.3S20.6,20.6,19.8,20.6z M7.8,24.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3S9.1,24.2,7.8,24.2z M7.8,20.6c-0.5,0-0.9,0.2-1.1,0.6s-0.2,0.9,0,1.3s0.7,0.6,1.1,0.6c0.7,0,1.3-0.6,1.3-1.3S8.6,20.6,7.8,20.6z"
                ></path>
              </StyledSvg>
            </OverlayTrigger>
            <CartSizeBadge>{cart.length}</CartSizeBadge>
          </CartLogo>
        </ListElement>
      </List>
    </Container>
  );
};

export default Header;
