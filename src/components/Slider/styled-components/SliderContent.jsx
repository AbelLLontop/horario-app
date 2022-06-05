import styled from 'styled-components';
const SliderContent = styled.div`
  height: 100vh;
    padding: 2.5rem 1.8rem;
    box-sizing: border-box;
    width: 16.8rem;
    line-height: 31px;
    font-family: 'Poppins',sans-serif;
  nav > ul > li{
      margin-bottom: 2px;
  }
  nav header{
      font-size: 16px;
      margin-top: 1.8rem;
  }
  a{
      text-decoration: none;
      color:#000000;
  }
  header {
    font-weight: 400;
    font-size: 32px;
    color: #222831;
    div {
      color: #00adb5;
    }
  }
  .itemNav {
    display: flex;
    align-items: center;
    border-left: none;
    position: relative;
    padding:6px 16px;
    border-radius: 12px;

    svg {
      width: 20px;
      margin-right: 8px;
    }
 
  }
  .itemNav.select{
      background-color: #F3F3F3;
      color:#222831;
  }

  .options {
      margin-top: 4px;
      padding-left: 12px;
    li {
      position: relative;
    }
    li::after,
    li::before {
      content: '';
      position: absolute;

      height: 50%;
      width: 10px;
      border-left: dashed 1px #000000;
      box-sizing: border-box;
    }
    li::after {
      bottom: 0;
      left: 0;
    }
    li::before {
      top: 0;
      border-bottom: dashed 1px #000000;
    }
    li:last-child::after {
      border: none;
    }
    .itemOption{
        padding-left: 13px;
        padding-top:4px;
        padding-bottom:4px;
        display: flex;
        align-items: center;
        svg{
            margin-right: 0px;
        }
    }
  }
`;

export default SliderContent;
