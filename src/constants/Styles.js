import styled from '@emotion/styled'

export const DETAIL_CARD_STYLE = {
    display: "block",
    margin: "10px",
    minWidth: "200px",
};

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
