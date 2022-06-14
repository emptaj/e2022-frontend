import styled from '@emotion/styled'
import { CardMedia } from '@mui/material';

export const DETAIL_CARD_STYLE = {
    display: "block",
    margin: "10px",
    minWidth: "200px",
};

export const CustomCardMedia = styled(CardMedia)
    ` position: absolute,
        top: 0,
        right: 0,
        height: 100%,
        width: 100%`


// export const CustomDiv = styled(({ imgURL, }) => <div />)`
//   background-image: ${imgURL};
// `;

export const CustomDiv2 = styled.div`
    background-image: url(${props => props.imgURL});
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    `;

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
