import styled from 'styled-components';
const StyledSlider = styled.div`
  position: relative;
  background-color: #fff9f8;
  padding: 60px;
  border-radius: 20px;
  .containerTitle {
    display: flex;
    width: 300px;
    background-color: #ffdad7;
    justify-content: center;
    border-radius: 50px;
    top: 20px;
    left: 50px;
    p {
      align-self: center;
    }
    img {
      width: 40px;
      height: 40px;
      object-fit: none;
      padding-top: 10px;
      padding-left: 10px;
    }
  }
  .slogan {
    margin-top: 30px;
    width: 400px;
    font-weight: 600;
    font-size: 38px;
    line-height: 50px;
  }
  .content {
    width: 300px;
    margin-top: 30px;
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
  }
  button {
    position: relative;
    background-color: #fff;
    z-index: 1;
    margin-top: 30px;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 500;
    transition: all ease 0.3s;
    :hover {
      background-color: #ec1257;
      color: #fff;
      transform: scale(1.3);
      cursor: pointer;
    }
  }
`;
const Hamburger = styled.img`
  position: absolute;
  bottom: -230px;
  right: -250px;
`;
const Marshmallow = styled.img`
  position: absolute;
  bottom: -60px;
  left: -115px;
`;
const Slider = () => {
  return (
    <StyledSlider>
      <div className="containerTitle">
        <p className="title">Faster Food Delivery Service </p>
        <img src="/images/delivery-man 1.png" alt="deliveryMan" />
      </div>
      <h1 className="slogan">Delivery in just 30 minutes</h1>
      <p className="content">
        Bring together your discussions memberships and content. Start your
        7-day free trial.
      </p>
      <button>Login</button>
      <Hamburger  src="images/frame4-hamburger-bg.png" alt="hamburger" />
      <Marshmallow src="images/frame4-marshmallow.png" alt="marshmallow" />
    </StyledSlider>
  );
};
export default Slider;
