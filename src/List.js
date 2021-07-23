import React from 'react';

const List = ({ listItems}) => {
    return listItems.map((item, i) => {
        return (
            <div key={i}>
                <h3>{item.item}</h3>
                <p>{item.name}</p>
            </div>
        );
    });
};
export default List;