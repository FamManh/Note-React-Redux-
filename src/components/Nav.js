import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <a className="navbar-brand text-light" >Note Manager</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse  justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Notes list</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => this.props.showAddForm()}>Add new note</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showAddForm: () => {
            dispatch({ type: 'SHOW_ADD_FORM' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
