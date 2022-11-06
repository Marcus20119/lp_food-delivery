import styled from 'styled-components';
import BackgroundLayout from './BackgroundLayout';
import Info from './Info';
import Navbar from './Navbar';

const StyledFrame1 = styled.div`
  position: relative;
  background: linear-gradient(108.33deg, #ffefed 10.3%, #ffecea 100%);
  height: 748px;
  width: 100%;
  margin-bottom: 67px;
`;

const Frame1 = () => {
  return (
    <StyledFrame1>
      <Navbar />
      <Info />
      <BackgroundLayout />
    </StyledFrame1>
  );
};

export default Frame1;
