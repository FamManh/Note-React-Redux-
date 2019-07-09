import React, { Component } from 'react';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import AlertInfo from './AlertInfo';



class App extends Component {
  showEditForm = () => {
    if (this.props.editFormVisibility)
      return (<NoteForm></NoteForm>)
  }
  showAddForm = () => {
    if (this.props.addFormVisibility)
      return (<NoteForm></NoteForm>)
  }
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <AlertInfo></AlertInfo>
        <div className="container">
          <div className="row">
            <NoteList></NoteList>
            {this.showEditForm()}
            {this.showAddForm()}
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editFormVisibility: state.editFormVisibility,
    addFormVisibility: state.addFormVisibility
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

