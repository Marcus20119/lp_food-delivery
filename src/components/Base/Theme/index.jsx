import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    textBlack: '#292019',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
