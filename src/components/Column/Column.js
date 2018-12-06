import * as React from 'react';
import styled from 'styled-components';
import { Item } from '../Item/Item';
import { Droppable } from 'react-beautiful-dnd';
// interface ColumnProps {
//     title: string;
// }

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const ItemList = styled.div`
    padding: 8px;
`;
export class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                {(provided) => (
                    <ItemList
                    InnerRef=
                    {...provided.droppableProps}
                    >
                    {this.props.items.map((items, index) => 
                    <Item key={items.id} item={items} index={index} />)}
                    {provided.placeholder}
                </ItemList>
                )}
                </Droppable>

            </Container>

        )
    }
}