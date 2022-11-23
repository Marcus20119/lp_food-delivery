import styled from 'styled-components';
const StyledFrame5  = styled.div`
  margin : 0 220px;
  margin-bottom:150px;
  p{
    color: #FF1919;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 5px;
    margin-top: 150px;
  }
  h1{
    color: #292019;
    text-align: center;
    font-weight: 600;
    font-size: 44px;
    line-height: 45px;
    margin-top:20px;
    margin-bottom: 70px;
  }
  .content-achieve{
    display: flex;
    justify-content: space-between;
    .component-achieve{
      width: 290px;
      height: 290px;
      background-image: linear-gradient(131.83deg, #FFFAFA 0%, #FFF7F7 99.21%);
      border: 2px solid ;
      border-image-slice: 0.5;
      border-image-source: linear-gradient(312.25deg, #FFC4BC 0%, rgba(255, 255, 255, 0) 45.19%);
      .content-container{
        width: 200px;
        height: 200px;
        margin: 45px;
        background-color: #fff;
        border-radius: 15px;
        padding: 40px 0;
        box-shadow: 0px 40px 80px #FBE4E0;
        h1{
          margin-bottom: 10px;
        }
        p{
          font-weight: 600;
          font-size: 13px;
          line-height: 18px;
          color: #62564D;
          letter-spacing: 0.5px;
          margin-top: 10px
        }
      }
    }
  }
`;
const achievements = [
  {
      data: "22K+",
      content: "Use Order Online"
  },
  {
    data: "459",
    content: "Use Order Online"
  },
  {
    data: "12k",
    content: "Use Order Online"
  },
]
const Frame5 = () => {
  return <StyledFrame5>
    <p>success stories</p>
    <h1>Get to know about us</h1>
    <div className="content-achieve">
      {achievements.map((achieve,index) =>{
        return (
          <div key={index} className="component-achieve">
            <div className="content-container">
              <h1>{achieve.data}</h1>
              <p>{achieve.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  </StyledFrame5>;
};

export default Frame5;

