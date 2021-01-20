import _ from 'lodash';
import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';

import Location from "./location";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "undecided": {
                name: "Undecided", players: [],
            },
            "lakeland": {
                name: "Lakeland", players: [],
            },
            "kholusia": {
                name: "Kholusia", players: [],
            },
            "amarang": {
                name: "Amh Araeng", players: [],
            },
            "ilmeg": {
                name: "Il Mheg", players: [],
            },
            "raktika": {
                name: "Rak'tika", players: [],
            },
            "tempest": {
                name: "Tempest", players: [],
            }
        }
    }
    onDragEnd = result => {
        const { source, destination } = result;
        if (!destination) { return; }
        const newState = Object.assign({}, this.state);
        const name = newState[source.droppableId].players[source.index];
        console.log(name);
        newState[source.droppableId].players.splice(source.index, 1)
        newState[destination.droppableId].players.splice(destination.index, 0, name);
        this.setState( newState )    
    }
    handleAddPlayer = (event) => {
        if (event.key === 'Enter') {
            const newState = Object.assign({}, this.state);

            newState["undecided"].players.push(event.target.value);

            this.setState( newState );
        }
    }
    render() {
        return (
            <div>
                <div className="locations">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        {
                            _.map(Object.entries(this.state), (item) => {
                                return (
                                    <div className="location" key={item[0]}>
                                        <h3>{item[1].name}</h3>
                                        <Location key={item[0]} dropId={item[0]} locationName={item[1].name} players={item[1].players} />
                                    </div>
                                )
                            })
                        }
                    </DragDropContext>
                </div>
                <br />
                <label>Add player:</label>
                <input type="text" name="names" onKeyDown={ this.handleAddPlayer } />
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));