import styled from "@emotion/styled";
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: calc(100vh - ${getSize(70)});
  .inner {
    max-width: 1440px;
    margin: auto;
    padding: ${getSize(0, 15)};
  }
  .banner {
    background: url("/static/images/banner1.jpg");
    background-size: cover;
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 100px 0;
      .icon {
        position: relative;
        margin-bottom: ${getSize(20)};
        .heart {
          width: 20px;
          height: 20px;
          padding: 20px;
          border-radius: 50%;
          background-color: #e2a2ae;
        }
      }
      .txt {
        font-size: ${getSize(18)};
      }
    }
  }

  .contact {
    flex: 1;
    background:linear-gradient( rgba(255, 255, 255, 0.6) 100%, rgba(255, 255, 255, 0.6)100%),url("/static/images/bg1.png") no-repeat;
    background-position: right top;
    background-size: 35%;
    @media (max-width: 768px) {
      background-size: 75%;
    }
    .line {
      margin: ${getSize(60, 0, 80, 0)};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${getSize(20)};
      &:before {
        content: "";
        height: 2px;
        margin-right: 10px;
        background: #737373;
        flex: 2 2 auto;
      }
      &:after {
        content: "";
        height: 2px;
        margin-left: 10px;
        background: #737373;
        flex: 2 2 auto;
      }
    }
    &-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: ${getSize(30)};
      }
    }

    &-item {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: ${getSize(30, 40)};
      background: rgb(230 230 230 / 40%);
      border-radius: 5px;
      width: calc((100% - 30px) / 3);
      box-sizing: border-box;

      @media (max-width: 768px) {
        width: 51%;
        margin-bottom: ${getSize(10)};
      }
      &:hover {
        box-shadow: 0 0 15px rgb(0 0 0 / 10%);
      }
      .icon {
        width: 20px;
        height: 20px;
        margin-bottom: ${getSize(20)};
      }
      .ttl {
        margin-bottom: ${getSize(20)};
        border-bottom: 1px solid #000;
      }
    }
  }

  .footer {
    text-align: center;
    font-size: ${getSize(12)};
    padding: ${getSize(10, 0)};
    background: #eaeaea;
    font-family: HindGuntur;
    line-height: 1;
  }
 
`;