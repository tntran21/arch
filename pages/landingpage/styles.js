import styled from "@emotion/styled";
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  position: relative;
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: ${getSize(100)};
    position: fixed;
    width: 100%;
    z-index: 10;
    padding: ${getSize(0, 15)};
    box-sizing: border-box;
    background: rgb(232 232 232 / 50%);

    &-list {
      display: flex;
      align-item: center;
    }
    &-item {
      margin-right: ${getSize(15)};
      color: #000;
      font-weight: bold;
      font-size: ${getSize(12)};
      &:last-child {
        margin-right: 0;
      }
    }
    &-logo {
      color: #fff;
      position: absolute;
      left: ${getSize(15)};
      top: 0;
      font-size: ${getSize(90)};
      font-weight: bold;
      line-height: 1;
      
      &.logo-1 {
        .txt {
          &2 {
            margin-left: ${getSize(20)};
          }
          &-small {
            font-size: ${getSize(50)};
          }
        }
      }
      &.logo-2 {
        visibility: hidden;
        color: #fff;
        bottom: 0;
        margin: 0 auto;
        font-size: ${getSize(30)};
        display: flex;
        align-items: center;
        span {
          &:last-child {
            margin-top: ${getSize(20)};
          }
        }
      }
      
    }
  }

  /** Section **/
  .section {
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    padding-top: ${getSize(100)};

    @keyframes bgMove1 {
      from { transform: translate(0%, -10%); }
      to { transform:  translate(0%, 0%); }
    }


    &-1 {
      display: flex;
      flex-direction: column;
      position: relative;
      background-color: rgba(0, 0, 0, 0.37);
      background-size: 100% 130%;
      background-repeat: no-repeat;
      overflow: hidden;

      .wrap {
        width: 100%;
        max-width: 1600px;
        margin: auto;
        padding: 0 17px 17px 17px;
        box-sizing: border-box;
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        align-items: flex-end;
        padding-bottom: ${getSize(100)};

        &-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: flex-end;
          z-index: 2;
          .content1 {
            display: flex;
            justify-content: space-between;
            @media (max-width: 767px) {
              flex-wrap: wrap;
              align-items: center;
            }
            &-left {
              color: #fff;
              font-weight: bold;
              width: 50%;
              font-size: ${getSize(18)};
              @media (max-width: 767px) {
                width: 49%;
              }
            }
          }

          .content2 {
            display: flex;
            justify-content: flex-end;
            color: #fff;
            margin: ${getSize(50, 0)};
            font-size: ${getSize(12)};
            &-box {
              width: 40%;
              display: flex;
              justify-content: space-between;
              @media (max-width: 767px) {
                flex-wrap: wrap;
                width: 100%;
                margin: ${getSize(60, 0)};
              }
            }
            &-item {
              width: calc((100% - 20px) / 2);
              @media (max-width: 767px) {
                width: 100%;
              }
            }
          }
        }


        .slider1 {
          width: 40%;
          height: 300px;
          border-radius: 7px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          @media (max-width: 767px) {
            width: 49%;
            justify-content: flex-end;
          }

          &-content {
            position: relative;
            width: 100%;
            height: 100%;
            max-width: 215px;
          }
          .sec-slider-item {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 1000px;
            overflow: hidden;
            will-change: opacity,transform;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 1000px;
              overflow: hidden;
            }
          }
        }
      }

      .sec-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 130%;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        animation: bgMove 20s infinite;

        img {
          display: block;
          object-fit: cover;
          width: 100%;
          height: 100%;
          object-position: 50% 50%;
          transform: translate(0%, -10%) matrix(1, 0, 0, 1, 0, 0);
          animation: bgMove1 18s infinite;
        }
      }

    }

    &-2 {
      display: flex;
      flex-direction: column;
      min-height: 140vh;
      background: #41443d;
      position: relative;
      padding-bottom: ${getSize(100)};
      height: 200vh;
      .content {
        position: absolute;
        z-index: 1;
        top: 100px;
        left: 0;
        right: 0;
        margin: auto;
        width: 80vw;
        max-width: 1124px;
        margin: auto;
        height: 200vh;
        img {
          border-radius: 100vh;
          object-fit: cover;
          height: 100%;
          width: 100%;
        }

        &-ttl {
          z-index: 2;
          font-size: ${getSize(50)};
          color: #fff;
          width: 60%;
          margin-top: ${getSize(20)};
          margin-left: 5vw;
        }
       
      }
    }
  }
`;