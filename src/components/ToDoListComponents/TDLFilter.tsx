import styled from "styled-components";
import { Button } from "../Button";
import { defaultTheme } from "../../styles/Theme.styled";

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
        styled={{
          backgroundColor:
            props.filterStatus === "all"
              ? defaultTheme.color.bgColor.main
              : "transparent",
          padding: "5px",
          minWidth: "50px",
        }}
      />
      <Button
        title="Active"
        onclick={() => props.changeFilter("active")}
        styled={{
          backgroundColor:
            props.filterStatus === "active"
              ? "rgb(205, 90, 145)"
              : "transparent",
          padding: "5px",
          minWidth: "50px",
        }}
      />
      <Button
        title="Completed"
        onclick={() => props.changeFilter("completed")}
        styled={{
          backgroundColor:
            props.filterStatus === "completed"
              ? "rgb(205, 90, 145)"
              : "transparent",
          padding: "5px",
          minWidth: "50px",
        }}
      />
    </TDLFilterWrapepr>
  );
}

const TDLFilterWrapepr = styled.div`
  display: flex;
  gap: 15px;
`;
