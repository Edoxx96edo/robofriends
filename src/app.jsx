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
        const robotFiltered = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField)})

        if(this.state.robots.length === 0){
           return(
            <div className="tc">
                    <h1>Loading</h1>
                </div>
           )
        }else 
        
            return(
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