import styled from "styled-components";

type ButtonPropsType = {
  title: string;
  onclick?: () => void;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
};

export function Button(props: ButtonPropsType) {
  return (
    <Btn
      onClick={props.onclick}
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
      color={props.color}
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
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: 20px;
  min-height: 20px;
  border-radius: 0.3rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;
