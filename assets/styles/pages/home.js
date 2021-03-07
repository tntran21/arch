import styled from "@emotion/styled";
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  height: 100vh;
  .section {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #515D5E;
    position: relative;
    display: flex; 

    &-1 {
      flex-direction: column;
      font-family: "HindGuntur";
      font-weight: normal;

      background:linear-gradient( rgba(64, 64, 64, 0.6) 100%, rgba(64, 64, 64, 0.6)100%),url("/static/images/home4.jpg");
      background-size: 100% 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      
      img {
        width: 100%;
        display: block;
      }
      .header {
        display: flex;
        align-items: center;
        height: ${getSize(40)};
        padding: ${getSize(30)};
        &-inner {
          display: inline-flex;
          align-items: center;
          padding: 10px 20px;
          background: rgb(199 190 190 / 30%);
          border-radius: 5px;
          clip-path: inset(0% 0% 0% 0%);
        }
        .logo {
          width: ${getSize(40)};
          height: ${getSize(40)};
          margin-right: ${getSize(10)};
          img {
            border-radius: 3px;
          }
        }
        .nav {
          color: #fff;
          text-decoration: none;
          line-height: 1;
          &:hover {
            text-decoration: underline;
          }
        }
        .comma {
          color: #fff;
          margin: ${getSize(0, 10)};
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        padding: ${getSize(50, 20, 20, 40)};
        position: relative;
        flex: 1;

        .txt-1 {
          color: #D8D5D5;
          font-weight: normal;
          font-family: "HindGuntur";
          letter-spacing: ${getSize(4)};
          margin-bottom: ${getSize(50)};
          margin-top: ${getSize(50)};
          opacity: 0;
          @media (max-width: 768px) {
            font-size: ${getSize(12)};
          }
        }
        .txt-2 {
          color: #fff;
          font-size: ${getSize(90)};
          @media (max-width: 768px) {
            font-size: ${getSize(35)};
          }
        }
        .txt-3 {
          color: #fff;
          margin-top: ${getSize(30)};
        }
        .txt-logo {
          position: absolute;
          right: -10px;
          bottom: 10%;
          color: #fff;
          transform: rotate(-90deg);
          letter-spacing: 3px;
        }
      }
    }
  }
`;