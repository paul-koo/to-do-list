import styled from "styled-components";
import { StyledPropsType } from "./Input";

type ButtonPropsType = {
  title: string;
  onclick?: () => void;
  styled?: StyledPropsType;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  padding?: string;
};

export function Button(props: ButtonPropsType) {
  return (
    <Btn
      onClick={props.onclick}
      styled={props.styled}
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
      color={props.color}
      padding={props.padding}
    >
      {props.title}
    </Btn>
  );
}

const Btn = styled.button<{
  styled?: StyledPropsType;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  padding?: string;
}>`
  width: ${(props) => props.styled?.width};
  height: ${(props) => props.styled?.height};
  background: ${(props) => props.styled?.backgroundColor};
  display: ${(props) => props.styled?.display};
  margin: ${(props) => props.styled?.margin};
  padding: ${(props) => props.styled?.padding};
  color: ${(props) => props.styled?.color};
  min-width: ${(props) => props.styled?.minWidth};
  min-height: ${(props) => props.styled?.minHeight || "20px"};
  max-width: ${(props) => props.styled?.maxWidth};
  max-height: ${(props) => props.styled?.maxHeigth};
  border-radius: ${(props) => props.styled?.borderRadius || "0.3rem"};
  border: ${(props) => props.styled?.border};

  /* width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: 50px;
  min-height: 20px;
  border-radius: 0.3rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding}; */
`;
