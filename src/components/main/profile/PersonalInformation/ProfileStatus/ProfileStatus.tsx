import React from 'react';

type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType, any> {

    state = {
        editMode: false
    }

    modeEditToggle() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return <>
            {!this.state.editMode ?
                <div onClick={() => this.modeEditToggle()}>{this.props.status}</div> :
                <input onBlur={() => this.modeEditToggle()} value={this.props.status} autoFocus={true}/>
            }
        </>
    }
};

export default ProfileStatus;