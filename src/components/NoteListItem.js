import React, { Component } from 'react';
import { connect } from 'react-redux'

class NoteListItem extends Component {

    getEditItem = () => {
        this.props.showEditForm();
        let item = {}
        item.id = this.props.index;
        item.title = this.props.title;
        item.desc = this.props.desc;
        this.props.getEditItem(item);
    }

    deleteItem = () => {
        this.props.deleteItem(this.props.index);
        this.props.showAlert('Delete Successfuly');
    }
    render() {
        return (
            < div className="card" >
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#num" + this.props.index} aria-expanded="true" aria-controls="collapseOne">{this.props.title}</button>
                        <div className="btn-group float-right">
                            <button className="btn btn-sm btn-warning" onClick={() => this.getEditItem()}>Edit</button>
                            <button className="btn btn-sm btn-danger" onClick={() => this.deleteItem()}>Delete</button>
                        </div>

                    </h2>
                </div>
                <div id={"num" + this.props.index} className="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">{this.props.desc}</div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideEditForm: () => {
            dispatch({ type: "HIDE_EDIT_FORM" })
        },
        showEditForm: () => {
            dispatch({ type: "SHOW_EDIT_FORM" })
        },
        getEditItem: (editItem) => {
            dispatch({ type: 'GET_EDIT_ITEM', editItem: editItem })
        },
        showAlert: (message) => {
            dispatch({ type: 'SHOW_ALERT', alertContent: message });
        },
        deleteItem: (id) => {
            dispatch({ type: 'DELETE_DATA', id: id });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteListItem)