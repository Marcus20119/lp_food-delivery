import styled from 'styled-components'
import Contact from './Contact'
import Information from './Information'
const StyledFrame7 = styled.div`
  width: 1300px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 500px auto;
  margin-bottom: 100px;
  grid-gap: 50px;
`
const Frame7 = () => {
  return <StyledFrame7>
    <Contact></Contact>
    <Information></Information>
  </StyledFrame7>;
};

export default Frame7;
