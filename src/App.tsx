import * as React from 'react';
import './App.css';
import data from './data';
import { Column } from './components/Column/Column';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
  public state = data;

  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return;
    }

    if( 
      destination.droppableId === source.droppableId && 
      destination.index === source.index
      ){
        return;
      }

      const column = this.state.columns[source.droppableId];
      const newItemsIds = Array.from(column.itemsId);
      newItemsIds.splice(source.index, 1);
      newItemsIds.splice(destination.index,0 , draggableId);
  }
  public render() {
    return (
      <div>
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const items = column.itemsId.map((itemsId: string) => this.state.items[itemsId])

          return <Column key={column.id} column={column} />;

        })}
      </DragDropContext>
      </div>

    );
  }
}

export default App;

// (
//   <div className="App">
//     <p>Hello world</p>
//   </div>
// );