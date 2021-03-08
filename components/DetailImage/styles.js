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

  .dialog {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    background: #000;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      background: #000;
    }
    .btn__close {
      color: #fff;
      top: ${getSize(10)};
    }
    &__img {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        object-fit: contain;
        max-height: 100%;
        max-width: 100%;
      }
    }

    .slider {
      .ec-arrow-right {
        margin-right: ${getSize(10)} !important;
      }
      .rec-carousel-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .cus__btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    padding: ${getSize(16)};
    color: #fff;
    width: ${getSize(20)};
    cursor: pointer;
  }
`;