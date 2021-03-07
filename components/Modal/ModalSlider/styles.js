import styled from "@emotion/styled";
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  .dialog {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    background: #000;
    .content {
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
  }
`;