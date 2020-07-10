import styled from "styled-components";

export const MovieWrapper = styled.section`
  width: ${props => props.active ? "60%" : "15%"};
  min-width: 170px;
  background-color: rgb(248,248,248);
  margin: 5px;  
  box-sizing: border-box;
`;

export const MoviePoster = styled.img`
  float: left; 
  display: block;
  width: 100%;
  max-width: 300px;
`;

export const MovieTitle = styled.h3`
  background-color: rgba(240, 80,70, 0.8);
  text-align: center;
  color: white;
  width: 100%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const MovieInfo = styled.div`
  text-align: ${props => props.active ? "left" : "center"};
  display: ${props => props.active ? "flex": "block" };
  height: 100%;
  justify-content: "space-between";
  flex-direction: column;


  div {
    padding-bottom: ${props => props.active ? "20px;": "0" };
    margin: ${props => props.active ? "20px": "0" };
  }
`;
