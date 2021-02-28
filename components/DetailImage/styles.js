import styled from "@emotion/styled"
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  width: 100%;
  .images {
    display: flex;
    flex-wrap: wrap;
    &__item {
      margin-right: ${getSize(8)};
    }
  }
`;