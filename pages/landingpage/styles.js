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
      position: relative;
      background-color: rgba(0, 0, 0, 0.37);
      background-size: 100% 130%;
      background-repeat: no-repeat;
      overflow: hidden;

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

      .slider1 {
        position: absolute;
        max-width: 240px;
        width: 50%;
        height: 350px;
        bottom: 20%;
        right: 25%;
        border-radius: 7px;
        overflow: hidden;

        &-content {
          position: relative;
          width: 100%;
          height: 100%;
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
          transform: matrix(1, 0, 0, 1, 0, 0);

          clip-path: circle(50% at 50% 50%);
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1000px;
            overflow: hidden;
            will-change: opacity,transform;
          }
        }
      }
    }
  }
`;