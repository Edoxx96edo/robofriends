import React from "react";
import {useState, useEffect } from "react";
import CardList from "../Components/cardList";
import SearchBox from "../Components/searchBox"
import "./app.css"
import  Scroll from "../Components/Scroll"





function App(){
    const [searchField, setSearchField] = useState("")
    const [robots , setRobots] = useState([])

    
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
           .then(response=> response.json())
           .then(users => setRobots(users))
    },[])
    
    const onSearchChange= (event)=>{
        setSearchField(event.target.value)

    }




    const robotFiltered = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField)})

    return !robots.length ?
        <h1>Loading</h1> :
           
            (
                <div className ="tc" >
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={robotFiltered} />
                    </Scroll>
                </div>
            )
    
}



export default App