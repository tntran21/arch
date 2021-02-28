import styled from "@emotion/styled"
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  width: 100%;
  max-width: 992px;
  padding: ${getSize(0, 16)};
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: ${getSize(20)};
  box-shadow: 0 2px 4px 1px #e6e6e6;
  border-radius: 5px;
`;