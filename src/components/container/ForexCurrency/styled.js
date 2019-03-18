import styled from "styled-components";

const InputContent = styled.div`
  display: flex;
  align-items: center;
`;

const MoreCurrency = styled.div`
  form {
    display: flex;
    align-items: center;
    margin: 2em;
    .input-field {
      margin-right: 2em;
      flex: 1;
    }
    button {
      height: 100%;
    }
  }
`;

export { InputContent, MoreCurrency };
