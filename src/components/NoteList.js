import React, { Component } from 'react';
import NoteListItem from './NoteListItem';
import { noteData } from './firebaseConnect'

class NoteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        noteData.on('value', (notes) => {
            let data = [];
            notes.forEach(item => {
                const id = item.key;
                const title = item.val().title;
                const desc = item.val().desc;
                data.push({
                    key: id,
                    title: title,
                    desc: desc
                });
            });
            this.setState({ data: data });
        });
    }



    setData = () => (
        this.state.data.map((value, key) => {
            return (
                <NoteListItem key={key} index={value.key} title={value.title} desc={value.desc}></NoteListItem>
            )
        })

    )
    render() {
        return (
            <div className="col">
                <div className="accordion" id="accordionExample">
                    {this.setData()}
                </div>
            </div>

        );
    }
}

export default NoteList;
