import React from "react";
import styled from "styled-components";

const ArtistContainer = styled.div`
  border : 1px solid #333;
  width: 20%;
  padding: 10px;
`;

const ArtistBox = styled.div`
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 16px;
    margin-left: 8px;
    border: none;
    background-color: #ddd;
    cursor: pointer;
    &:hover {
        border-color: #ccc;
    }
`;
const InnerBox = styled.div.attrs({
    className: "InnerBox",
})`
    display: flex;
    flex-direction: ${(props) => props.$flexDirection || "row"};
    align-items: ${(props)=> props.$alignItems || "center"};
    width: ${(props)=>props.$width || "50%"};
    height:100%;
`;

const ArtistListPage = () => {
    
    
    return (
        <>
        <ArtistContainer>
            <ArtistBox>크리에이터</ArtistBox>
            <ArtistBox>sss</ArtistBox>
        </ArtistContainer>
        </>
    );
};


export default ArtistListPage;