import React, { Component } from 'react';
import Player from './player';
import { Droppable } from 'react-beautiful-dnd';

export default class Location extends Component {
    render() {
        return (
            <Droppable droppableId={this.props.dropId}>
                {
                    (provided, snapshot) => (
                        <div
                            className="location-drop"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <ul className="playerlist">
                                {this.props.players.map((playername, index) => {
                                    return (
                                        <li key={playername}>
                                            <Player playerName={playername} dropId={index} />
                                        </li>
                                    )
                                })}
                                {provided.placeholder}
                            </ul>
                        </div>
                    )
                }
            </Droppable>
        )
    }
}
