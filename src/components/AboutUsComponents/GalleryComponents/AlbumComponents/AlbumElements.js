import styled from "styled-components";

export const AlbumGrid = styled.div`
    display: grid;
    grid-gap: 5px;
    justify-content:center;
    grid-template-columns: auto auto auto auto;
    @media screen and (max-width: 726px) {
        grid-template-columns: auto auto auto;
    }
    @media screen and (max-width: 538px) {
        grid-template-columns: auto auto;
    }
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
`;