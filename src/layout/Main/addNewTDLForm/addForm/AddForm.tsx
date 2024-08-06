import styled, { css } from 'styled-components';
import { Button } from '../../../../components/Button';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { defaultTheme } from '../../../../styles/Theme.styled';

type AddFormPropsType = {
    state: boolean;
    setOpenState: (state: boolean) => void;
    addTDL: (TDLTitle: string) => void;
};
export function AddForm(props: AddFormPropsType) {
    const [inputCorrect, setInputCorrect] = useState(true);
    const [inputState, setInputState] = useState('');
    const InputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputState(event.currentTarget.value);
    };

    const addBtnOnClickHandler = () => {
        if (inputState.trim()) {
            props.addTDL(inputState);
            props.setOpenState(props.state ? false : true);
        } else {
            setInputCorrect(false);
        }
        setInputState('');
    };

    const addBtnOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addBtnOnClickHandler();
        }
    };

    return (
        <AddFormWrapper state={props.state}>
            <input
                type={'text'}
                value={inputState}
                onChange={InputHandler}
                placeholder={inputCorrect ? '' : 'Error'}
                onKeyUp={addBtnOnKeyUpHandler}
            />
            <ControlPanel>
                <Button
                    title="Add"
                    onclick={addBtnOnClickHandler}
                    styled={{
                        backgroundColor: defaultTheme.color.bgColor.secondary,
                        minWidth: '50px',
                    }}
                />
                <Button
                    title="X"
                    onclick={() =>
                        props.setOpenState(props.state ? false : true)
                    }
                    styled={{
                        backgroundColor: defaultTheme.color.bgColor.secondary,
                        minWidth: '50px',
                    }}
                />
            </ControlPanel>
        </AddFormWrapper>
    );
}

const AddFormWrapper = styled.div<{ state: boolean }>`
    padding: 5px;
    display: none;
    flex-grow: 1;
    margin: 0 10px;
    ${(props) =>
        props.state &&
        css`
            display: flex;
        `}
    flex-direction: column;
    gap: 5px;
`;
const ControlPanel = styled.div`
    display: flex;
    gap: 10px;
`;
