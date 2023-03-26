import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string | null
    updateStatus: (status: string) => void
}

const ProfileStatusWithHook = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(!editMode)
        props.updateStatus(e.currentTarget.value)
    }

    const onChangeHandlerNewStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setEditMode(!editMode)
    }


    return <>
        {!editMode ?
            <span style={{display:'inline-block', padding:'5px'}} onClick={onClickHandler}>{props.status}</span> :
            <input
                style={{display:'inline-block', padding:'5px'}}
                onChange={onChangeHandlerNewStatus}
                onBlur={onChangeHandler}
                value={status ? status : ''}
                autoFocus={true}/>

        }
    </>

};

export default ProfileStatusWithHook;