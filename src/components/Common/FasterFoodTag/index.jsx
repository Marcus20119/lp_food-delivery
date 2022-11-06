import styled from 'styled-components';
import PropTypes from 'prop-types';
import SVGDeliveryMan from '~/components/SVG/DeliveryMan';

const StyledFasterFoodTag = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  background: #ffdad7;
  border: 1px solid #fcc7c3;
  border-radius: 50px;
  padding: 0 16px;

  .fasterFoodTag-text {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #524439;
  }
`;

const FasterFoodTag = ({ mainStyle }) => {
  return (
    <StyledFasterFoodTag style={mainStyle}>
      <span className="fasterFoodTag-text">Faster Food Delivery Service</span>
      <SVGDeliveryMan />
    </StyledFasterFoodTag>
  );
};

FasterFoodTag.propTypes = {
  mainStyle: PropTypes.object,
};

export default FasterFoodTag;
