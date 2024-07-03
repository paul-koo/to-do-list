import styled from "styled-components";
import { Button } from "../Button";

type TDLFilterPropsType = {
  changeFilter: (filter: string) => void;
  filterStatus: string;
};

export function TDLFilter(props: TDLFilterPropsType) {
  return (
    <TDLFilterWrapepr>
      <Button
        title="All"
        onclick={() => props.changeFilter("all")}
        backgroundColor={
          props.filterStatus === "all" ? "rgb(205, 90, 145)" : "transparent"
        }
        padding="5px"
      />
      <Button
        title="Active"
        onclick={() => props.changeFilter("active")}
        backgroundColor={
          props.filterStatus === "active" ? "rgb(205, 90, 145)" : "transparent"
        }
        padding="5px"
      />
      <Button
        title="Completed"
        onclick={() => props.changeFilter("completed")}
        backgroundColor={
          props.filterStatus === "completed"
            ? "rgb(205, 90, 145)"
            : "transparent"
        }
        padding={"5px"}
      />
    </TDLFilterWrapepr>
  );
}

const TDLFilterWrapepr = styled.div`
  display: flex;
  gap: 15px;
`;
