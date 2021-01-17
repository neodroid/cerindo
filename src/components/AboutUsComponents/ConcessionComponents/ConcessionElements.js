import styled from "styled-components";

export const ConcWrapped = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin: 50px 20px 10px;
`;
export const Imagees = styled.img`
  width: 809px;
  @media screen and (max-width: 900px) {
    width: 500px;
}
@media screen and (max-width: 570px) {
  width: 300px;
}
`;

export const Tabled = styled.div`
    margin: 20px auto;
    width: 95%;
    overflow: auto;
    td, th {
        border: 1px solid white;
        padding: 8px;
      }
      
      tr:nth-child(even){background-color: #f2f2f2;}
      
      tr:hover {background-color: #ddd;}
      
      th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #9b9b9b;
        color: white;
      }
`;