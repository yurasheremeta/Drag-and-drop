import * as React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautoful-dnd';

const Container = styled.div`
    border: 1px , solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
`
export class Item extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.item.id} index={this.props.index}>
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.draggableHandleProps}
                        innerRef={provided.innerRef}
                    >
                        {this.props.item.content}
                    </Container>
                )}
            </Draggable>

        )
    }
}