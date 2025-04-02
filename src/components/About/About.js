import { Component, Fragment } from "react"; // New way to use React.Component and React.Fragment
import ClassComponent from "../Component/ClassComponent";
import FunctionComponent from "../Component/FunctionComponent";
import Profile from "../../Profile/Profile";

class About extends Component {
  constructor() {
    super();
    console.log("I am parent class");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
    // This lifecycle method is called after the component is mounted.
    // Commonly used for API calls to avoid blocking the UI during rendering.
    // Execution Order: constructor --> render --> componentDidMount
  }

  render() {
    console.log("I am parent render() method");

    return (
      <Fragment>
        {/* React.Fragment allows us to return multiple elements without adding extra nodes to the DOM */}
        {/* Rendering functional and class-based components with props */}
        {/* <FunctionComponent name="Deepak Singh" location="Varanasi" /> */}
        <hr />
        {/* <ClassComponent name="Shivshankar Singh" location="Pune" /> */}
        <Profile name="KSK"/>
      </Fragment>
    );
  }
}

export default About;