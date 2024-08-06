import { ChangeEvent, useState } from 'react';

type EditableSpanPropsType = {
    value: string;
    callback: (newTitle: string) => void;
};

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(props.value);

    return (
        <>
            {editMode ? (
                <input
                    type={'text'}
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.currentTarget.value);
                    }}
                    onBlur={() => {
                        setEditMode(false);
                        props.callback(title);
                    }}
                    autoFocus
                />
            ) : (
                <span onDoubleClick={() => setEditMode(true)}>{title}</span>
            )}
        </>
    );
}
