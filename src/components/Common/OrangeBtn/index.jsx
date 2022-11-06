import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledOrangeBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 60px;
  background: linear-gradient(180deg, #ff7a45 0%, #ff5713 100%);
  border-radius: 8px;
  padding: 22px 41px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #edfcfe;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  .orangeBtn-shadow {
    position: absolute;
    width: 80%;
    height: 52px;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #ff7a45 0%, #ff5713 100%);
    opacity: 0.3;
    filter: blur(25px);
    border-radius: 8px;
  }
`;

const OrangeBtn = ({
  type = 'button',
  disabled = false,
  mainStyle,
  children,
}) => {
  return (
    <StyledOrangeBtn type={type} disabled={disabled} style={mainStyle}>
      {children}
      <div className="orangeBtn-shadow"></div>
    </StyledOrangeBtn>
  );
};
StyledOrangeBtn.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  mainStyle: PropTypes.string,
};
export default OrangeBtn;
