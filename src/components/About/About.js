import {Component,Fragment} from "react";
import ClassComponent from "../Component/ClassComponent";
import FunctionComponent from "../Component/FunctionComponent";

class About extends Component {
  constructor() {
    super();
    console.log("I am parent class")
  }

  render() {
    console.log("I am parent render() method")
    return (
      <Fragment>
        <FunctionComponent name={"Deepak Singh"} location={"Varanasi"} />
        <hr></hr>
        <ClassComponent name={"Shivshankar Singh"} location={"Pune"} />
      </Fragment>
    );
  }
}
// const About= ()=>{
//     return(<>
//    <FunctionComponent name={"Deepak Singh"} location={"Varanasi"}/>
//    <hr></hr>
//    <ClassComponent name={"Shivshankar Singh"} location={"Pune"}/>
//     </>)
// }

export default About;
