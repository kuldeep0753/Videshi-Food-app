import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    //Way to define a state in class based component. It's is a  huge object, we define n numebr of state . but in functional we need useState according to number of state.
    this.state = {
      count1: 0,
      count2: 2,
    };

    console.log("I am Child Class component");
  }

  render() {
    const { name, location } = this.props; //onlu use const,let in render function
    let {count1,count2} = this.state;
    const handleDecrementClick = ()=>{
        if(count1>0){
            count1 -= 1;
            //First  way to update the state value. overall its same
           this.setState({count1});
        }
    }

    const handleIncrementClick = () => {
        // count1 += 1;
        //Second  way to update the state value. overall its same
        this.setState({count1:this.state.count1+1}); //Using setState we update the value for UI
      };

      console.log("I am Child render() method");
    return (
      <>
        <h2>Team details</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: kdsfsd@gmail.com</h4>
        <button onClick={handleDecrementClick}> Decrement</button>
        <p>{count1}</p>
        <button onClick={handleIncrementClick}> Increment</button>
        <p>{count2}</p>
      </>
    );
  }
}

export default ClassComponent;
