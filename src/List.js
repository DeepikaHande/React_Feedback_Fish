import React from 'react';
// import { IconButton } from "@chakra-ui/react"
// import { Icon } from "@chakra-ui/react"
// import { TriangleUpIcon } from "react-icons/md"
// import React from "react";
const List = ({ listItems, setItems }) => {
    console.log(setItems);
    // const deleteItem = (itemToBeDeleted) => {
    //     const newArray = listItems.filter((item) => {
    //         return item !== itemToBeDeleted;
    //     });
    //     setItems(newArray);
    // };

    return listItems.map((item,name, i) => {
        console.log(item,name,i)
        return (
            <div key={i}>
                <h3>{i[0]}</h3>
                <p>{i[1]}</p>
            </div>
        );
    });
};
export default List;
// class Upvote extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
//     increment = () => {

//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     decrement = () => {

//         this.setState({
//             count: this.state.count - 1
//         })
//     }
//     render() {
//         return (
//             <div>

//                 <button onClick={this.increment}>
//                     {/* <Icon as={TriangleUpIcon} />; */}

//                 </button>
//                 <br />
//                 <span>{this.state.count}</span>
//                 <br />
//                 <button onClick={this.decrement}>
//                     down
//                 </button>
//             </div>
//         );
//     }
// }
// export default Upvote;