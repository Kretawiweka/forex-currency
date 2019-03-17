import styled from "styled-components";

const CardWrapper = styled.div`
  margin: 0.5em 0em;
`;

const CardContent = styled.div`
  margin: 0.5em;
  .wrapper-content {
    display: flex;
    align-items: center;
    .header {
      display: flex;
    }
  }
`;

export { CardWrapper, CardContent };
