import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    
    // Defining the initial state in a class-based component.
    // Unlike functional components where we use useState separately for each state variable,
    // here, we define all state variables inside a single object.
    this.state = {
      count1: 0,
      count2: 2,
    };

    //console.log("I am Child Class component");
  }

  componentDidMount() {
    //console.log("Child ComponentDidMount");
    // This lifecycle method is called once the component is mounted.
    // It is commonly used for API calls to prevent blocking the UI during initial rendering.
    // Execution Order: constructor --> render --> componentDidMount
  }

  render() {
    // Destructuring props for cleaner code
    const { name, location } = this.props; 
    
    // Destructuring state
    let { count1, count2 } = this.state;
    
    // Function to decrement count1, ensuring it doesn't go below 0
    const handleDecrementClick = () => {
      if (count1 > 0) {
        this.setState({ count1: count1 - 1 }); // Updating state using setState
      }
    };

    // Function to increment count1
    const handleIncrementClick = () => {
      this.setState({ count1: this.state.count1 + 1 }); // setState ensures the UI updates
    };

    //console.log("I am Child render() method");
    
    return (
      <>
        <h2>Team details</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: kdsfsd@gmail.com</h4>
        
        <button onClick={handleDecrementClick}>Decrement</button>
        <p>{count1}</p>
        <button onClick={handleIncrementClick}>Increment</button>
        <p>{count2}</p>
      </>
    );
  }
}

export default ClassComponent;