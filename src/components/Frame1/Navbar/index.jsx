import styled from 'styled-components';

const StyledNavbar = styled.div`
  position: absolute;
  top: 35px;
  left: 140px;
  right: 140px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .f1-navList {
    margin-left: auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 34px;

    &__item {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      color: #392f27;
      cursor: pointer;
    }
    &__item:hover {
      opacity: 0.8;
    }
  }
  .f1-navBtnWrap {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: 40px;
  }
  .f1-navBtn {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: ${props => props.theme.color.textBlack};
    padding: 16px 25px;
    border-radius: 8px;
    cursor: pointer;
  }
  .f1-navBtn:hover {
    opacity: 0.8;
  }
`;
const navList = ['Chef', 'Menu', 'Service', 'About'];
const btns = [
  {
    name: 'Login',
    color: '#fff',
  },
  {
    name: 'Get Started',
    color: '#FDC9B4',
  },
];

const Navbar = () => {
  return (
    <StyledNavbar>
      <svg
        width="109"
        height="23"
        viewBox="0 0 109 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9899 0.690619C12.7715 0.690619 14.2027 0.860771 15.2837 1.20108C16.3847 1.52136 17.1454 2.09188 17.5658 2.91261C17.9861 3.71333 18.1062 4.84434 17.9261 6.30565C17.7259 7.74695 17.3155 8.82792 16.695 9.54856C16.0944 10.2692 15.0935 10.6896 13.6923 10.8097L13.6623 10.9899C15.2637 11.13 16.3447 11.7005 16.9052 12.7014C17.4657 13.6823 17.6258 15.0135 17.3856 16.695C17.1854 18.0762 16.7951 19.1472 16.2145 19.9079C15.634 20.6485 14.8033 21.169 13.7223 21.4693C12.6413 21.7495 11.2601 21.8896 9.57859 21.8896C8.09726 21.8896 6.81611 21.8796 5.73514 21.8596C4.65417 21.8596 3.66328 21.8396 2.76248 21.7995C1.86167 21.7595 0.940844 21.7095 0 21.6494L2.91261 0.930833C3.73335 0.850762 4.53407 0.800718 5.31477 0.780699C6.11548 0.740664 6.96625 0.720646 7.86705 0.720646C8.78788 0.700628 9.82881 0.690619 10.9899 0.690619ZM10.7797 4.6842C10.2392 4.6842 9.72872 4.6842 9.24829 4.6842C8.76786 4.6842 8.31746 4.6842 7.89708 4.6842L7.26652 9.15821H9.78878C10.7296 9.15821 11.3802 8.99807 11.7405 8.67778C12.1209 8.35749 12.3911 7.68689 12.5513 6.66598C12.6513 5.88528 12.5713 5.36481 12.311 5.10458C12.0708 4.82433 11.5604 4.6842 10.7797 4.6842ZM9.66867 12.6714H6.75606L6.03541 17.896C6.81611 17.896 7.64686 17.896 8.52765 17.896C9.26831 17.896 9.85884 17.826 10.2992 17.6859C10.7396 17.5457 11.0599 17.2755 11.2601 16.8751C11.4803 16.4748 11.6504 15.9043 11.7706 15.1636C11.9107 14.1427 11.8406 13.4721 11.5604 13.1518C11.2801 12.8315 10.6495 12.6714 9.66867 12.6714Z"
          fill="#322D2F"
        />
        <path
          d="M28.5988 6.30565C30.5605 6.30565 32.0719 6.51584 33.1328 6.93622C34.2138 7.33658 34.9344 7.93712 35.2948 8.73783C35.6751 9.53855 35.7752 10.5294 35.595 11.7105C35.3949 13.0717 34.7943 14.0126 33.7934 14.533C32.8125 15.0335 31.3412 15.3538 29.3795 15.4939L25.2658 15.8242C25.2858 16.6649 25.496 17.2054 25.8963 17.4456C26.2967 17.6658 26.9273 17.7759 27.788 17.7759C28.2284 17.7759 28.7989 17.7659 29.4996 17.7459C30.2202 17.7059 30.9609 17.6658 31.7216 17.6258C32.5023 17.5658 33.1829 17.5057 33.7634 17.4456L34.1538 20.8087C33.1529 21.2491 32.0318 21.5593 30.7907 21.7395C29.5696 21.9197 28.3986 22.0097 27.2776 22.0097C25.1357 22.0097 23.4842 21.7095 22.3231 21.1089C21.1621 20.4884 20.3914 19.5876 20.0111 18.4065C19.6307 17.2254 19.5306 15.7641 19.7108 14.0226C19.951 11.9207 20.4314 10.3193 21.1521 9.21827C21.8727 8.09726 22.8536 7.33658 24.0947 6.93622C25.3358 6.51584 26.8372 6.30565 28.5988 6.30565ZM28.5687 9.93891C27.9482 9.93891 27.4477 10.029 27.0674 10.2092C26.7071 10.3693 26.4068 10.6696 26.1666 11.11C25.9464 11.5504 25.7562 12.1909 25.5961 13.0317L28.1183 12.7614C28.819 12.7014 29.3494 12.5813 29.7098 12.4011C30.0701 12.221 30.2903 11.8106 30.3704 11.17C30.4504 10.6495 30.3603 10.3092 30.1001 10.1491C29.8399 9.98896 29.3294 9.91889 28.5687 9.93891Z"
          fill="#322D2F"
        />
        <path
          d="M44.5168 6.30565C45.2775 6.32567 46.1082 6.36571 47.009 6.42576C47.9098 6.4658 48.7806 6.53586 49.6214 6.63595C50.4621 6.73604 51.1728 6.84614 51.7533 6.96625L51.3029 10.1791C50.322 10.1791 49.3411 10.1791 48.3602 10.1791C47.3994 10.1591 46.4585 10.1491 45.5377 10.1491C44.4367 10.1491 43.6961 10.1791 43.3157 10.2392C42.9354 10.2792 42.7252 10.4394 42.6851 10.7196C42.6451 10.9798 42.7352 11.18 42.9554 11.3201C43.1956 11.4603 43.616 11.6304 44.2165 11.8306L47.6996 12.9116C48.9007 13.2719 49.7815 13.8224 50.342 14.5631C50.9225 15.3037 51.1427 16.2846 51.0026 17.5057C50.8425 18.7868 50.4521 19.7477 49.8316 20.3883C49.211 21.0289 48.3702 21.4492 47.3093 21.6494C46.2483 21.8696 44.9972 21.9797 43.5559 21.9797C42.515 21.9797 41.414 21.9397 40.253 21.8596C39.1119 21.7795 37.8008 21.6194 36.3194 21.3792L36.7999 18.1363C37.1001 18.1563 37.5305 18.1663 38.091 18.1663C38.6515 18.1663 39.2521 18.1663 39.8926 18.1663C40.5532 18.1663 41.1738 18.1663 41.7543 18.1663C42.8353 18.1663 43.656 18.1463 44.2165 18.1062C44.777 18.0662 45.1674 17.9961 45.3876 17.896C45.6078 17.7759 45.7279 17.6158 45.7479 17.4156C45.7879 17.1554 45.6878 16.9652 45.4476 16.8451C45.2274 16.725 44.767 16.5548 44.0664 16.3346L40.7034 15.2236C39.3822 14.8033 38.4714 14.1827 37.9709 13.362C37.4905 12.5212 37.3303 11.5003 37.4905 10.2992C37.6306 9.41844 37.9309 8.68779 38.3913 8.10727C38.8717 7.50673 39.6024 7.05633 40.5833 6.75606C41.5641 6.45579 42.8753 6.30565 44.5168 6.30565Z"
          fill="#322D2F"
        />
        <path
          d="M59.0824 6.72603L59.1425 9.51853C60.1434 8.51764 61.2243 7.73694 62.3854 7.17643C63.5664 6.59591 64.7075 6.30565 65.8085 6.30565C67.0496 6.30565 68.0405 6.66598 68.7811 7.38662C69.5418 8.10727 69.8221 9.16822 69.6219 10.5695L68.0605 21.6494H62.5956L63.9168 12.311C63.9968 11.7706 63.9668 11.4002 63.8267 11.2C63.6866 10.9798 63.3863 10.8898 62.9259 10.9298C62.4655 10.9498 61.955 11.0899 61.3945 11.3502C60.854 11.5904 60.2034 12.0008 59.4428 12.5813L58.1816 21.6494H52.7167L54.7886 6.72603H59.0824Z"
          fill="#322D2F"
        />
        <path
          d="M77.8898 0C79.0709 0 79.5914 0.570511 79.4512 1.71153L79.2411 3.30296C79.1009 4.30386 78.5004 4.80431 77.4394 4.80431H75.2775C74.1165 4.80431 73.606 4.2338 73.7461 3.09277L73.9563 1.50135C74.0564 0.500449 74.6469 0 75.7279 0H77.8898ZM78.6705 6.72603L76.5987 21.6494H71.1638L73.2357 6.72603H78.6705Z"
          fill="#322D2F"
        />
        <path
          d="M88.1895 0.630564L87.0185 9.24829C86.8984 9.88887 86.7382 10.5094 86.5381 11.11C86.3379 11.6905 86.0877 12.281 85.7874 12.8815C87.1086 12.221 88.2796 11.3502 89.3005 10.2692C90.3214 9.16822 90.982 7.98716 91.2823 6.72603H96.8974C96.477 8.40754 95.8064 9.8188 94.8855 10.9598C93.9847 12.1009 92.9538 13.0617 91.7928 13.8424C92.1531 14.1227 92.4534 14.4329 92.6936 14.7732C92.9338 15.0935 93.134 15.4338 93.2941 15.7942L96.0566 21.6494H90.4416L87.8292 15.8542C87.5089 15.9743 87.1887 16.0944 86.8684 16.2145C86.5481 16.3146 86.2378 16.4147 85.9375 16.5148C85.9375 16.715 85.9275 16.8951 85.9075 17.0553L85.2469 21.6494H79.782L82.7246 0.630564H88.1895Z"
          fill="#322D2F"
        />
        <path
          d="M109 17.7536C109 19.8265 107.319 21.507 105.246 21.507C103.173 21.507 101.493 19.8265 101.493 17.7536C101.493 15.6807 103.173 14.0002 105.246 14.0002C107.319 14.0002 109 15.6807 109 17.7536Z"
          fill="#322D2F"
        />
      </svg>
      <div className="f1-navList">
        {navList.map((navItem, index) => (
          <span key={`f1-navList__item${index}`} className="f1-navList__item">
            {navItem}
          </span>
        ))}
      </div>
      <div className="f1-navBtnWrap">
        {btns.map((btn, index) => (
          <button
            key={`f1-navBtn${index}`}
            className="f1-navBtn"
            style={{ backgroundColor: btn.color }}
          >
            {btn.name}
          </button>
        ))}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
