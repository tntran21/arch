import styled from "@emotion/styled";
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  padding: ${getSize(20, 0)};
  .ttl {
    font-size: ${getSize(20)};
    font-weight: bold;
  }
  .detail {
    margin-top: ${getSize(10)};
    font-size: ${getSize(13)};
    font-style: italic;
    span {
      margin-right: ${getSize(3)};
      font-style: normal;
    }
  }
  .description {
    margin-top: ${getSize(10)};
    white-space: pre-line;
  }
`;