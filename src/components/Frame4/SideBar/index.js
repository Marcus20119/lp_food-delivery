import styled from 'styled-components';
import { useState } from 'react';
const StyledSidebar = styled.div`
  border-right: 5px solid #ccc;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  .menuCard {
    width: 220px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    &:hover {
      background-color: #ff8351;
      cursor: pointer;
      p {
        color: #ffffff;
      }
    }
    .imgContainer {
      position: relative;
      width: 40px;
      height: 40px;
      background-color: #fff;
      margin: 10px;
      border-radius: 10px;
      img {
        position: absolute;
        display: block;
        width: 80%;
        object-fit: contain;
        left: 5px;
        bottom: 5px;
      }
    }
    p {
      color: #9a9088;
      align-self: center;
      margin-left: 15px;
      font-size: 13px;
    }
    .active {
      content: '';
      position: absolute;
      bottom: 0;
      right: -5px;
      width: 5px;
      height: 60px;
      background-color: #23254b;
      transition: all ease 3s;
    }
  }
`;
const menu = [
  {
    name: 'Fast Food',
    img: '/images/frame4-hamburger.png',
  },
  {
    name: 'Coffee',
    img: '/images/frame4-coffee.png',
  },
  {
    name: 'Pizza',
    img: '/images/frame4-pizza.png',
  },
  {
    name: 'Rice Menu',
    img: '/images/frame4-rice.png',
  },
  {
    name: 'Dessert',
    img: '/images/frame4-deserts.png',
  },
];
const SideBar = () => {
  let [active, setActive] = useState(0);
  return (
    <StyledSidebar>
      {menu.map((item, index) => {
        return (
          <div
            key={index}
            className="menuCard"
            style={
              active === index
                ? {
                    backgroundColor: '#FF8351',
                    cursor: 'pointer',
                  }
                : {}
            }
            onClick={() => setActive(index)}>
            <div className="imgContainer">
              <img src={item.img} alt="item.name" />
            </div>
            <p
              style={
                active === index
                  ? {
                      color: '#FFFFFF',
                    }
                  : {}
              }>
              {item.name}
            </p>
            {active === index ? <span style={{ top:index*85 }} className="active"></span> : ''}
          </div>
        );
      })}
    </StyledSidebar>
  );
};
export default SideBar;
