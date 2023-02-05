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
                <div onClick={this.modeEditToggle.bind(this)}>{this.props.status}</div> :
                <input onBlur={this.modeEditToggle.bind(this)} value={this.props.status} autoFocus={true}/>
            }
        </>
    }
};

export default ProfileStatus;