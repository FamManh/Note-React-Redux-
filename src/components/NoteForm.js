import React, { Component } from 'react';
import { connect } from 'react-redux'

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editItem.id,
            title: this.props.editItem.title,
            desc: this.props.editItem.desc
        }
    }

    getFormTitle = () => {
        if (this.props.addFormVisibility) {
            return 'Thêm mới';
        } else {
            return 'Sửa'
        }
    }

    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    updateData = () => {
        let item = {}
        item.id = this.state.id;
        item.title = this.state.title;
        item.desc = this.state.desc;
        this.props.UpdateData(item);
        this.props.showAlert("Update Successfuly");
    }

    insertData = () => {
        let item = {}
        item.title = this.state.title;
        item.desc = this.state.desc;
        //this.props.insertDataToFirebase(item);
        this.props.InsertData(item);
        this.props.showAlert("Insert Successfuly");
    }

    submitData = () => {
        if (this.props.addFormVisibility) {
            this.insertData();
        } else {
            this.updateData();
        }
    }

    render() {
        return (
            <div className="col-4">
                <form>
                    <h3 className="title">{this.getFormTitle()}</h3>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            defaultValue={this.props.addFormVisibility === true ? '' : this.props.editItem.title}
                            aria-describedby="helpId" placeholder="Tên" name='title' onChange={(event) => this.isChange(event)} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows={4} placeholder="Mô tả"
                            defaultValue={this.props.addFormVisibility === true ? '' : this.props.editItem.desc} name='desc' onChange={(event) => this.isChange(event)} />
                    </div>
                    <button type="reset" className="btn btn-primary btn-block" onClick={() => this.submitData()}>Lưu</button>
                </form>
            </div>


        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addFormVisibility: state.addFormVisibility
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        InsertData: (item) => {
            dispatch({ type: 'INSERT_DATA', newItem: item })
        },
        UpdateData: (item) => {
            dispatch({ type: 'UPDATE_DATA', editItem: item })
        },
        showAlert: (message) => {
            dispatch({ type: 'SHOW_ALERT', alertContent: message })

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)

