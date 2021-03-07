import styled from "@emotion/styled"
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, .5);
  z-index: 1000;
  .content {
    position: relative;
    width: 98%;
    box-sizing: boder-box;
    display: block;
    background: #fff;
    margin: auto;
    height: 100%;
  }
  .btn__close {
    position: absolute;
    right: ${getSize(34)};
    top: 0;
    z-index: 1001;
    display: block;
    font-size: ${getSize(25)};
    cursor: pointer;
    color: #fff;
    width: ${getSize(25)};
  }
`;