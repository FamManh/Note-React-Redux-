import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux'

class AlertInfo extends Component {
    handelDismiss = () => {
        this.props.hideAlert();
    }
    alerts = () => {
        if (!this.props.alertVisibility) return;
        return (<Alert onDismiss={() => this.handelDismiss()} timeout={1500} position="bottom-right">{this.props.alertContent}</Alert>)
    }
    render() {
        return (
            <AlertContainer position='bottom-right'>
                {this.alerts()}
            </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertVisibility: state.alertVisibility,
        alertContent: state.alertContent
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideAlert: () => {
            dispatch({ type: 'HIDE_ALERT' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)