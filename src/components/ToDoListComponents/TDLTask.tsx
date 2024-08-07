import styled from 'styled-components';
import { Button } from '../Button';
// import { Input } from '../Input';
import { ChangeEvent } from 'react';
import { defaultTheme } from '../../styles/Theme.styled';
import { EditableSpan } from '../EditableSpan';

export type TDLTaskPropsType = {
    id: string;
    title: string;
    isDone: boolean;
    removeTask: (idTask: string) => void;
    changeStatusTask: (idTask: string, value: boolean) => void;
    changeTaskTitle: (newTtile: string) => void;
};

export function TDLTask(props: TDLTaskPropsType) {
    return (
        <Li isDone={props.isDone}>
            <Label>
                {/* <Input
                    type={'checkbox'}
                    checked={props.isDone}
                    callbackOnChange={(
                        event: ChangeEvent<HTMLInputElement>
                    ) => {
                        props.changeStatusTask(
                            props.id,
                            event.currentTarget.checked
                        );
                    }}
                /> */}
                <input
                    type={'checkbox'}
                    checked={props.isDone}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        props.changeStatusTask(
                            props.id,
                            event.currentTarget.checked
                        );
                    }}
                />
            </Label>
            <EditableSpan
                value={props.title}
                callbackChange={props.changeTaskTitle}
            />
            <Button
                title={'-'}
                onclick={() => props.removeTask(props.id)}
                styled={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: `${defaultTheme.color.bgColor.main}`,
                }}
            />
        </Li>
    );
}

const Label = styled.label`
    display: flex;
    gap: 10px;
`;

const Li = styled.li<{ isDone: boolean }>`
    display: flex;
    gap: 10px;
    & p {
        display: inline-block;
        flex-grow: 1;
        color: ${(props) =>
            props.isDone
                ? defaultTheme.color.font.third
                : defaultTheme.color.font.main};
    }
`;
