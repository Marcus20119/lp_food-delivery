import styled from 'styled-components';
import FasterFoodTag from '~/components/Common/FasterFoodTag';
import OrangeBtn from '~/components/Common/OrangeBtn';

const StyledInfo = styled.div`
  position: absolute;
  left: 140px;
  top: 185px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 443px;

  h1 {
    display: block;
    width: 100%;
    font-weight: 700;
    font-size: 60px;
    line-height: 66px;
    letter-spacing: 0.01em;
    color: #292019;
    margin-bottom: 24px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #594d43;
    margin-bottom: 44px;
  }
  .f1-infoBtnWrap {
    display: flex;
    gap: 20px;
  }
  .f1-infoBtnPlay {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 13px;

    &Icon:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    &Text {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;

      color: ${props => props.theme.color.textBlack};
    }
  }
`;

const Info = () => {
  return (
    <StyledInfo>
      <FasterFoodTag mainStyle={{ marginBottom: '17px' }} />
      <h1>
        The food <br /> of your choice
      </h1>
      <p>
        Discover local, on-demand delivery or Pickup from nearby restaurants.
      </p>
      <div className="f1-infoBtnWrap">
        <OrangeBtn>Explore Now</OrangeBtn>
        <div className="f1-infoBtnPlay">
          <div className="f1-infoBtnPlayIcon">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.1936 22.7778C53.421 10.3085 42.4941 1 29.4367 1C14.2838 1 2 13.536 2 29C2 44.464 14.2838 57 29.4367 57C42.4941 57 53.421 47.6915 56.1936 35.2222"
                stroke="#FFAC9C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g filter="url(#filter0_d_1_1517)">
                <circle cx="28.4999" cy="28.5" r="8.5" fill="white" />
              </g>
              <path
                d="M27.9999 27L30.6414 28.8491L27.9999 30.6981V27Z"
                fill="#040447"
              />
              <defs>
                <filter
                  id="filter0_d_1_1517"
                  x="-0.00012207"
                  y="10"
                  width="57"
                  height="57"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="10" />
                  <feGaussianBlur stdDeviation="10" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.862745 0 0 0 0 0.329412 0 0 0 0 0.227451 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_1517"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_1517"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <span className="f1-infoBtnPlayText">How It Works</span>
        </div>
      </div>
    </StyledInfo>
  );
};

export default Info;
