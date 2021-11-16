import React, { Component } from 'react'
import Movie from "./Movie.json"
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
            <div className="listmovie">
                { Movie.map(listmovie => {
                    return(
                        <>
                        
                    <Link
                    
                    key={`${listmovie.title}-${listmovie.id}`}
                    to={`/Movie/${listmovie.id}`}>
                        <h4>{listmovie.title}</h4>
                        
                        
                        
                    </Link>
                        
                        </>
                    )
                }) }
                </div>
                </div>
        )
    }
}
