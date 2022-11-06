import styled from 'styled-components';
import { Fragment } from 'react';
import SVGDeliveryMan from '~/components/SVG/DeliveryMan';

const StyledHamburger = styled.img`
  position: absolute;
  top: 125px;
  left: 0px;
  z-index: 1;
  transform: scale(0.5);
  transform-origin: 0 0;
`;
const StyledCircle = styled.img`
  position: absolute;
  left: 682px;
  top: 241px;
  z-index: 1;
`;
const StyledChef = styled.img`
  position: absolute;
  left: 738px;
  top: 145px;
  z-index: 2;
  transform: scale(0.5);
  transform-origin: 0 0;
`;
const StyledCustomer = styled.img`
  position: absolute;
  left: 520px;
  top: 656px;
  z-index: 1;
  transform: scale(0.5);
  transform-origin: 0 0;
`;
const StyledIcon1 = styled.img`
  position: absolute;
  left: 985px;
  top: 250.8px;
  z-index: 3;
  transform: scale(0.5);
  transform-origin: 0 0;
`;
const StyledIcon2 = styled.img`
  position: absolute;
  left: 840px;
  top: 680px;
  z-index: 3;
  transform: scale(0.5);
  transform-origin: 0 0;
`;
const StyledDeliveryTag = styled.div`
  position: absolute;
  left: 1300px;
  top: 329px;
  display: flex;
  align-items: center;
  gap: 7px;
  height: 50px;
  background: #fff6f595;
  /* opacity: 0.6; */
  border-radius: 25px;
  padding: 18px;

  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    color: #292019;
  }
`;

const StyledRating = styled.div`
  position: absolute;
  left: 650px;
  top: 637px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-weight: 600;
    font-size: 26px;
    line-height: 25px;
    color: #382d25;
  }
  span {
    font-weight: 500;
    font-size: 11px;
    line-height: 10px;
    color: #5a514a;
  }
  .f1-star {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3px;
    height: 13px;
  }
`;

const BackgroundLayout = () => {
  return (
    <Fragment>
      <StyledHamburger src="/images/f1-hamburger.png" alt="hamburger" />
      <StyledCircle src="/images/f1-circle.png" alt="circle" />
      <StyledChef src="/images/f1-chef.png" alt="chef" />
      <StyledCustomer src="/images/f1-customer.png" alt="customer" />
      <StyledIcon1 src="/images/f1-icon1.png" alt="icon1" />
      <StyledIcon2 src="/images/f1-icon2.png" alt="icon2" />
      <StyledDeliveryTag>
        <span>Faster Delivery</span>
        <SVGDeliveryMan />
      </StyledDeliveryTag>
      <StyledRating>
        <h3>4.8</h3>
        <span>Ratings</span>
        <div className="f1-star">
          {Array(5)
            .fill('')
            .map((item, index) => (
              <div key={`starIcon${index}`}>
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.63632 0L8.12627 4.29898H12.9478L9.0471 6.9559L10.5371 11.2549L6.63632 8.59797L2.73559 11.2549L4.22553 6.9559L0.324805 4.29898H5.14637L6.63632 0Z"
                    fill="#FFC151"
                  />
                </svg>
              </div>
            ))}
        </div>
      </StyledRating>
    </Fragment>
  );
};

export default BackgroundLayout;
