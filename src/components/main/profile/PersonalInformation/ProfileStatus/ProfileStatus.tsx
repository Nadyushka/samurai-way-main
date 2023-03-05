import React from 'react';

type PropsType = {
    status: string | null
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.PureComponent<PropsType, {editMode:boolean,status:string|null}> {

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
        this.props.updateStatus(this.state.status ? this.state.status : ' ---- ')
    }

    onChangeHandler(currentStatus: string) {
        this.setState({
            status: currentStatus
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>) {

        if (prevProps.status !== this.props.status) {

            console.log(this.props.status)

                this.setState({
                    status: this.props.status
                })
        }
    }

    render() {
        return <>
            {!this.state.editMode ?
                <div onClick={this.modeEditOn}>{`Status: ` + this.state.status}</div> :
                <input
                    onChange={(e) => this.onChangeHandler(e.currentTarget.value)}
                    onBlur={this.modeEditOff}
                    value={this.state.status ? this.state.status : ''}
                    autoFocus={true}/>
            }
        </>
    }
};

export default ProfileStatus;