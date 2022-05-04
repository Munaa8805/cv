import styled from "styled-components";

export const ServicesContainer = styled.div`
  // height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
export const ServicesWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-gap: 16px;
  padding: 50px;
`;
export const ServicesCard = styled.div`
  background: #999;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  // max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-top: 2rem;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #01bf71;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  align-self: flex-start;
  text-align: justify;
  margin-bottom: 1.5rem;
  span {
    font-weight: bold;
  }
`;
