import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';

export default class Player extends Component {
    getStyle(style, snapshot) {
        if (!snapshot.isDropAnimating) {
          return style;
        }
        return {
          ...style,
          // cannot be 0, but make it super tiny
          transitionDuration: `0.001s`,
        };
    }
      
    render() {
        return (
            <Draggable draggableId={this.props.playerName} index={this.props.dropId}>
                {(provided, snapshot) => (
                    <div
                        className='player'
                        ref={provided.innerRef}
                        style={this.getStyle(provided.draggableProps.style, snapshot)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <h5>{this.props.playerName}</h5>
                    </div>
                )}
            </Draggable>
        )
    }
}
