import styled from "styled-components";

export const FormContainer = styled.div`
  align-items: center;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  flex-wrap: wrap;
  font-size: 1.125rem;
  font-weight: 700;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`;

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: 700;
  height: 2.5rem;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const FormTaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const FormMinuteAmountInput = styled(BaseInput)`
  width: 4rem;
`;
