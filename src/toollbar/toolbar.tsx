// import * as React from 'react';

// interface ToollbarProps {
//     title: string;
// }

// const getItems = (count: number, offset = 0) =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         content: `item ${k + offset}`
//     }));
//     const reorder = (list : string[], startIndex: number, endIndex: number) => {
//         const result = Array.from(list);
//         const [removed] = result.splice(startIndex, 1);
//         result.splice(endIndex, 0, removed);
    
//         return result;
//     };

//     const move = (source, destination: number, droppableSource: number, droppableDestination: number) => {
//         const sourceClone = Array.from(source);
//         const destClone = Array.from(destination);
//         const [removed] = sourceClone.splice(droppableSource.index, 1);
    
//         destClone.splice(droppableDestination.index, 0, removed);
    
//         const result = {};
//         result[droppableSource.droppableId] = sourceClone;
//         result[droppableDestination.droppableId] = destClone;
    
//         return result;
//     };
    
// const Toollbar: React.SFC<ToollbarProps> = props => {
//     const {
//         title,
//     } = props;

//     return (
        
//     )
// }