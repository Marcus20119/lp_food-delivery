import styled from 'styled-components';
import SideBar from './SideBar';
import Slider from './Slider';
const StyledFrame4  = styled.div`
  display: grid ;
  grid-template-columns: 300px auto;
  margin : 0 220px;
  margin-bottom: 100px;
  column-gap: 75px;
`;
const Frame4 = () => {
  return <StyledFrame4>
    <SideBar></SideBar>
    <Slider></Slider>
  </StyledFrame4>;
};

export default Frame4;
