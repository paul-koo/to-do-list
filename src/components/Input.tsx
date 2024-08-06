import { ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

type InputPropsType = {
    type: string;
    value?: string;
    checked?: boolean;
    placeholder?: string;
    classname?: string;
    callbackOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
    callbackOnKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
    callbackOnBlur?: () => void;
    callbackOnDoubleClick?: () => void;
    width?: string;
    styled?: StyledPropsType;
};

export type StyledPropsType = {
    width?: string;
    height?: string;
    backgroundColor?: string;
    display?: string;
    margin?: string;
    padding?: string;
    color?: string;
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeigth?: string;
    borderRadius?: string;
    border?: string;
};

export function Input(props: InputPropsType) {
    return (
        <InputStyled
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            checked={props.checked}
            className={props.classname}
            onChange={props.callbackOnChange}
            onKeyUp={props.callbackOnKeyUp}
            onBlur={props.callbackOnBlur}
            styled={props.styled}
        ></InputStyled>
    );
}

const InputStyled = styled.input<{ styled?: StyledPropsType }>`
    width: ${(props) => props.styled?.width || ''};
    height: ${(props) => props.styled?.height || ''};
    background-color: ${(props) => props.styled?.backgroundColor || ''};
`;
