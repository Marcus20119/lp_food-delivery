import styled from 'styled-components';
const StyledDownloadApp = styled.div`
  width: 500px;
  h5 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ff1919;
    letter-spacing: 10px;
    margin-bottom: 15px;
  }
  h1 {
    font-weight: 600;
    font-size: 42px;
    line-height: 54px;
    margin-bottom: 20px;
  }
  p {
    color: #594d43;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
  button {
    padding: 20px 40px;
    background: linear-gradient(180deg, #ff7a45 0%, #ff5713 100%);
    color: #fff;
    border-radius: 15px;
    opacity: 0.7;
    margin-top: 50px;
    transition: all 0.3s ease-in-out;
    :hover{
      cursor: pointer;
      opacity: 1;
      transform: scale(1.2);
    }
  }
  .img{
    position: absolute;
    bottom: 0;
    right: 200px;
    padding: 20px 10px;
    background-color:#000;
    width: 300px;
    height: 437px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
`;
const DownloadApp = () => {
  return (
    <StyledDownloadApp>
      <h5>DOWNLOAD APP</h5>
      <h1>Download our Ios & android app</h1>
      <p>
        Discover local, on-demand delivery or Pickup from nearby restaurants.
      </p>
      <div className="img">
        <img src="/images/frame6-mobile screen.png" alt="mobile" />
      </div>
      <button>Explore Now</button>
    </StyledDownloadApp>
  );
};
export default DownloadApp;
