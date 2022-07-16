import styled from "styled-components";

export const CountdownContainer = styled.div`
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  gap: 1rem;
  line-height: 8rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    border-radius: 8px;
    padding: 2rem 1.5rem;
  }
`;

export const CountdownSeparator = styled.div`
  color: ${(props) => props.theme["green-500"]};
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  overflow: hidden;
  width: 4rem;
`;
