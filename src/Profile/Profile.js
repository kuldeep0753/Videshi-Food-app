import {Component,Fragment} from "react";

class Profile extends Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{name:"Default",
                location: "XYZ",
                avatar_url:""}
        }
    }

    //After component mouting over, this will called
    async componentDidMount(){
        const jsonData = await fetch("https://api.github.com/users/kuldeep0753");
        const data = await jsonData.json();
        console.log(data);
        this.setState({userInfo:data})
    }

    //After component updated, this will called
    componentDidUpdate(){
        console.log("Updation done!!")
    }

    //Once switch to differnet page , this Profile component unmount
    componentWillUnmount(){
        console.log("Unmount Done,when go to differnet page")
    }
    render(){

        const {name,location,avatar_url} = this.state.userInfo;
        return <Fragment>
            <h2>Portfolio Name: {name}</h2>
            <h3>Location: {location}</h3>
            <img src={avatar_url}/>
        </Fragment>
    }
}

export default Profile;

/**
 * ---Mounting Phase
 *    Constructor(dummy)
 *    Render (dummy value)
 *      <HTML > with dummy
 *    ComponentDidMount
 *      <API> Call
 *      this.setState() ---state get changed
 * 
 * ---Updating Phase
 *      Re-render happen with API data
 *      <HTML> with API data
 *      componentDidUpdate()s
 */