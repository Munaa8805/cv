import styled from "styled-components";

export const Container = styled.section`
  background: ${(props) => props.bg || "#fff"};
  padding: 40px 0;
  @media screen and (max-width: 992px) {
  }
`;
export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.number || 2}, 1fr);
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: stretch;
  padding: 0 50px;
  gap: 1rem;
  background: ${(props) => props.bg || ""};
  @media screen and (max-width: 992px) {
    padding: 0 39px;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 39px;
  }
`;
export const ContainerCard = styled.div`
  background: ${(props) => props.bg || "#999"};
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: ${(props) => props.padding || "0"};
  box-shadow: 0 1px 3px rgba(230, 125, 34, 0.5);
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const Image = styled.img`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
`;
