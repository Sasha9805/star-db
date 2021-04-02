import React from 'react';
import { PersonList, PersonDetails } from "../sw-components";
import Row from "../row";

const PeoplePage = ({match, history}) => {
  const { id } = match.params;
  return (
    <Row
      left={<PersonList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default PeoplePage;

// export default class PeoplePage extends Component {
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
//         left={<PersonList onItemSelected={this.onItemSelected}/>}
//         right={
//           <ErrorBoundary>
//             <PersonDetails itemId={selectedItem} isPressed={isPressed} />
//           </ErrorBoundary>
//         }
//       />
//     );
//   }
//
// };