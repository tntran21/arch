import styled from "@emotion/styled"
import { getSize } from "utils/common/size-utils";

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: ${getSize(0, 16)};
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: ${getSize(20)};
  box-shadow: 0px 2px 5px 1px #f7f0f0;
  border-radius: 5px;

  margin-bottom: ${getSize(60)};
`;