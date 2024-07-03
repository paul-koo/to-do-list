import styled from "styled-components";

type ButtonPropsType = {
  title: string;
  onclick?: () => void;
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
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  padding?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: 50px;
  min-height: 20px;
  border-radius: 0.3rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
`;
