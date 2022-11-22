import styled from 'styled-components';
import DownloadApp from './downloadApp';
const StyledFrame6 = styled.div`
  position: relative;
  width: 1300px;
  margin: 0 auto;
  background-image: linear-gradient(131.83deg, #fffafa 0%, #ffe3e3 99.21%);
  padding: 150px 150px;
  border-radius: 15px;
  margin-bottom: 150px;
`;
const Frame6 = () => {
  return (
    <StyledFrame6>
      <DownloadApp></DownloadApp>
    </StyledFrame6>
  );
};

export default Frame6;
