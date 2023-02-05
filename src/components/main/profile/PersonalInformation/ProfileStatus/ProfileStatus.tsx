import React from 'react';

type PropsType = {
    status: string | null
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType, any> {

    state = {
        editMode: false,
        status: this.props.status,
    }

    modeEditOn = () => {
        this.setState({
            editMode: true
        })
    }

    modeEditOff = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status ? this.state.status : ' - ')
    }

    onChangeHandler(currentStatus: string) {
        this.setState({
            status: currentStatus
        })
    }

    render() {
        return <>
            {!this.state.editMode ?
                <div onClick={this.modeEditOn}>{`Status: ` + this.state.status}</div> :
                <input onChange={(e) => this.onChangeHandler(e.currentTarget.value)}
                       onBlur={this.modeEditOff}
                       value={this.state.status ? this.state.status : ''}
                       autoFocus={true}/>
            }
        </>
    }
};

export default ProfileStatus;