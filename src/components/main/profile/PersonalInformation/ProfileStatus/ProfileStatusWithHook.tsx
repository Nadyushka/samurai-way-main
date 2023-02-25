import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    status: string | null
    updateStatus: (status: string) => void
}

const ProfileStatusWithHook = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [newStatus, setNewStatus] = useState(props.status)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(!editMode)
        props.updateStatus(e.currentTarget.value)
    }

    const onChangeHandlerNewStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

 


    return <>
        {!editMode ?
            <div onClick={onClickHandler}>{`Status: ` + props.status}</div> :
            <input
                onChange={onChangeHandlerNewStatus}
                onBlur={onChangeHandler}
                value={newStatus ? newStatus : ''}
                autoFocus={true}/>
        }
    </>

};

export default ProfileStatusWithHook;