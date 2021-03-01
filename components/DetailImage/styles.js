import styled from "@emotion/styled"
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  width: 100%;
  padding-bottom: ${getSize(20)};
  .images {
    line-height: 0;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: ${getSize(8)};
    @media (max-width: 840px) {
      grid-template-columns: auto auto auto;
    }
    @media (max-width: 626px) {
      grid-template-columns: auto auto;
    }
    @media (max-width: 576px) {
      grid-template-columns: auto;
    }
    &__item { 
      width: 100%;
      height: ${getSize(205)};
      box-shadow: 0 0 5px rgb(0 0 0 / 25%);
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 15px rgb(0 0 0 / 10%);
      }
      img {
        width: 100%;
        display: inline;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;