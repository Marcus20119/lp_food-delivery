import styled from 'styled-components';

const StyledInformation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  .nav-footer {
    width: 220px;
    h5 {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #392f27;
      letter-spacing: 1px;
      margin-bottom: 30px;
    }
    .nav-element-container {
      display: flex;
      flex-direction: column;
      .nav-item {
        position: relative;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 13px;
        line-height: 25px;
        color: #81756c;
        :hover {
          opacity: 0.7;
        }
      }
    }
  }
  form{
    position: absolute;
    display: flex;
    bottom: 0;
    right: 0;
    background-color:#FFF8F7;
    border: 1px solid #FFEAE7;
    border-radius: 4px;
    padding: 3px 5px 3px 15px;
    font-size: 14px;
    .input{
      border: none;
      background-color:#FFF8F7;
    }
    .button-input{
      padding: 10px 12px;
      background: linear-gradient(180deg, #FF7A44 0%, #FF5816 100%);
      border-radius: 10px
    }
  }
`;

const datas = [
  {
    name: 'Navigation',
    navItems: ['About', 'Service', 'Menu', 'Chef'],
  },
  {
    name: 'Resources',
    navItems: ['Blog', 'News Updates'],
  },
  {
    name: 'Stay up to date',
    navItems: ['Stay Informed On How You Can Make a Difference'],
  },
];
const Contact = () => {
  return (
    <StyledInformation>
      {datas.map((data, index) => {
        return (
          <div key={index} className="nav-footer">
            <h5>{data.name}</h5>
            <div className="nav-element-container">
              {data.navItems.map((navItem, index) => {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a key={index} href="#" className="nav-item">
                    {navItem}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
      <form>
        <input className="input" type="text" placeholder="Your email address" />
        <button className='button-input'>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.00571428 10L12 5L0.00571428 0L0 3.88889L8.57143 5L0 6.11111L0.00571428 10Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </StyledInformation>
  );
};

export default Contact;
