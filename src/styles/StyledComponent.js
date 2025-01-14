import styled from "styled-components";

export const Wrap = styled.div`
  overflow: hidden;
  min-width: ${(props) => props.$minWidth || "1200px"};
`;

export const Main = styled.main`
  width: ${(props) => props.$Width || "1200px"};
  margin: 0 auto;
  overflow: hidden;
`;
