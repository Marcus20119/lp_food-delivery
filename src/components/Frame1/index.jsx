import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  background-color: #fff;
  .f1-text {
    color: ${props => props.theme.color.textBlack};
  }
`;

const Frame1 = () => {
  return (
    <StyledCard>
      <p className="f1-text">Test styled-components</p>
    </StyledCard>
  );
};

export default Frame1;
