import React from 'react';
import { StarshipList } from "../sw-components";

const StarshipsPage = ({history}) => {
  return (
    <StarshipList
      onItemSelected={(itemId) => {
        history.push(`/starships/${itemId}`);
      }} />
  );
};

export default StarshipsPage;

// export default class StarshipsPage extends Component {
//
//   state = {
//     selectedItem: null,
//     isPressed: false
//   };
//
//   onItemSelected = (selectedItem) => {
//     this.setState({
//       selectedItem,
//       isPressed: true
//     });
//   };
//
//   render() {
//
//     const { selectedItem, isPressed } = this.state;
//
//     return (
//       <Row
//         left={<StarshipList onItemSelected={this.onItemSelected}/>}
//         right={
//           <ErrorBoundary>
//             <StarshipDetails itemId={selectedItem} isPressed={isPressed} />
//           </ErrorBoundary>
//         }
//       />
//     );
//   }
//
// };