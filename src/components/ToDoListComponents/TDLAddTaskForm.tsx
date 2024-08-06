import styled from 'styled-components';
import { Button } from '../Button';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { defaultTheme } from '../../styles/Theme.styled';

type TDLAddTaskFormPropsType = {
    addTask: (newTask: string) => void;
};
export function TDLAddTaskForm(props: TDLAddTaskFormPropsType) {
    const [inputCorrect, setInputCorrect] = useState(true);
    const [input, setInput] = useState('');

    const onClickButtonHandler = () => {
        if (input.trim()) {
            props.addTask(input);
        } else {
            setInputCorrect(false);
        }
        setInput('');
    };

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value);
    };

    const onKeyUpInputHandler = (event: KeyboardEvent) => {
        setInputCorrect(true);
        if (event.key === 'Enter') {
            onClickButtonHandler();
        }
    };

    return (
        <TDLAddTaskFormWrapper>
            <input
                type={'text'}
                value={input}
                placeholder={inputCorrect ? '' : 'Error'}
                onChange={onChangeInputHandler}
                onKeyUp={onKeyUpInputHandler}
                onBlur={() => {
                    setInputCorrect(true);
                }}
            />
            <Button
                title="+"
                onclick={onClickButtonHandler}
                styled={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: `${defaultTheme.color.bgColor.main}`,
                }}
            />
        </TDLAddTaskFormWrapper>
    );
}

const TDLAddTaskFormWrapper = styled.div`
    display: flex;
    gap: 10px;
    input::-webkit-input-placeholder {
        color: red;
    }
    input {
        flex-grow: 1;
    }
`;
