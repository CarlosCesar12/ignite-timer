import styled from "styled-components";

export const HistoryContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  overflow: auto;

  table {
    border-collapse: collapse;
    min-width: 600px;
    width: 100%;

    th {
      background: ${(props) => props.theme["gray-600"]};
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;
      padding: 1rem;
      text-align: left;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      font-size: 0.875rem;
      line-height: 1.6;
      padding: 1rem;
    }
  }
`;

const STATUS_COLOR = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR;
}

export const Status = styled.span<StatusProps>`
  align-items: center;
  display: flex;
  gap: 0.5rem;

  &::before {
    background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
    border-radius: 50%;
    content: "";
    height: 0.5rem;
    width: 0.5rem;
  }
`;
