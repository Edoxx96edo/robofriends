import React from "react";
import { Component } from "react";
import CardList from "../Components/cardList";
import SearchBox from "../Components/searchBox"
import "./app.css"
import  Scroll from "../Components/Scroll"



class App extends Component{
    constructor(){
        super()
        this.state={
            robots : [],
            searchField: ""
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=> response.json())
            .then(users => 
                this.setState({robots : users }))
    }

    setRobots=(event)=>{
        this.setState({searchField: event.target.value})

    }


    render(){

        const {robots, searchField} = this.state;

        const robotFiltered = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField)})

        return !robots.length ?
            <h1>Loading</h1> :
           
            (
                <div className ="tc" >
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.setRobots}/>
                    <Scroll>
                        <CardList robots={robotFiltered} />
                    </Scroll>
                </div>
            )
    }
}



export default App