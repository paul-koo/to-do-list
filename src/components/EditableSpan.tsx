import { ChangeEvent, useState } from 'react';

type EditableSpanPropsType = {
    value: string;
    callbackChange: (newTitle: string) => void;
};

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(props.value);

    const activateEditModeHandler = () => {
        setEditMode(true);
    };
    const deactivateEditModeHandler = () => {
        setEditMode(false);
        props.callbackChange(title);
    };

    return (
        <>
            {editMode ? (
                <input
                    type={'text'}
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.currentTarget.value);
                    }}
                    onBlur={deactivateEditModeHandler}
                    autoFocus
                />
            ) : (
                <span onDoubleClick={activateEditModeHandler}>{title}</span>
            )}
        </>
    );
}
