import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Movie from "./Movie.json"


export default class Movies extends Component {
    constructor(){
        super()
        this.state = {
            Movies: []

        }
    }

    
    
    render() {
        const { id } = this.props.match.params.id
        const film = Movie.find(movies => movies.id === Number(id))
        return (
            <>
            <Link to={`/Movie/${Movie.id}`}>{Movie.id}</Link>
            <h1>Hello {this.props.match.params.id}</h1><div>
                <img src={film.image} />
                <p>{film.director}</p>
                <p>{film.description}</p>
            </div></>

                    

                
            
        )
    }
}

