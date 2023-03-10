import styled from "styled-components";

export const Container = styled.div`
width: 340px !important;
height: 109px !important;
display: flex;
align-items: center;
justify-content: space-evenly;
cursor: pointer;
margin-bottom: 0.3rem;


&:hover {
    background-color: #9F9F9F75;
}

h3 {
    color: #9C1515;
    font-size: 13px;
    margin: 0;   
}

p {
    color: #9C1515;
    font-size: 14px;
    margin: 0;
}

.views {
    font-size: 8px;
}
.color {
    color: #9C1515;
}

@media (max-width: 768px) {
    width: 50% !important;
    height: 15% !important;
}

/* @media (max-width: 620px) {
  width: 90%;
  height: 18%;
} */

/* @media (max-width: 350px) {
  width: 90%;
  height: 18%;
} */

`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 145px;
    height: 80px;

    &:hover {
    background-color: #9F9F9F75;
}

@media (max-width: 768px) {
    height: 85%;
    width: 50%;
}

@media (max-width: 620px) {
    height: 85%;
    width: 50%; 
}

@media (max-width: 350px) {
    width: 50%;
    height: 85%;
}
`

export const Left = styled.img`
    width: 140px;
    height: 80px;
    border-radius: 4px;

    &:hover {
    background-color: #9F9F9F75;
}

  @media (max-width: 1024px) {
    width: 125px
}

@media (max-width: 768px) {
    height: 85%;
    width: 33%;
}

@media (max-width: 620px) {
    height: 85%;
    width: 45%;
}

@media (max-width: 350px) {
    width: 40%;
    height: 85%;
}
 `