import React from 'react';
import Recipe from "../Recipe/Recipe"
import "./library.scss";


class Library extends React.Component {
  constructor(){
    super()

    this.state = {
      sections: [{
        id: 1,
        size: 'large',
        name: 'MLK Biography',
        imageUrl: 'https://images.pexels.com/photos/34592/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
      {
        id: 2,
        size: 'large',
        name: 'Malcolm X 1965',
        imageUrl: 'https://images.pexels.com/photos/45717/pexels-photo-45717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 3,
        size: 'large',
        name: 'American History',
        imageUrl: 'https://images.pexels.com/photos/415078/pexels-photo-415078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 4,
        size: 'large',
        name: 'Oregon Trail',
        imageUrl: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 5,
        size: 'large',
        name: 'Sunshine State',
        imageUrl: 'https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 6,
        size: 'large',
        name: 'The Rise of Alabama Crimson',
        imageUrl: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 7,
        size: 'large',
        name: 'The Goat',
        imageUrl: 'https://images.pexels.com/photos/159621/open-book-library-education-read-159621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 8,
        size: 'large',
        name: 'Netflix vs Hulu',
        imageUrl: 'https://images.pexels.com/photos/264635/pexels-photo-264635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 9,
        size: 'large',
        name: 'Serial Killers',
        imageUrl: 'https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 10,
        size: 'large',
        name: 'Crossover by Jordan',
        imageUrl: 'https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 11,
        size: 'large',
        name: 'Bernie Sanders',
        imageUrl: 'https://images.pexels.com/photos/1166657/pexels-photo-1166657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 12,
        size: 'large',
        name: 'George Washington Carver the Farmer',
        imageUrl: 'https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 13,
        name: 'Ghetto Slums',
        size: 'large',
        imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 14,
        name: 'NBA vs NFL',
        size: 'large',
        imageUrl: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: 15,
        name: 'Globalization',
        size: 'large',
        imageUrl: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }]
  }
  }

    render(){
     return(
       <div className="library">
       {
         this.state.sections.map(({name, imageUrl, id, size}) => (
           <Recipe key={id} title={name} imageUrl={imageUrl} size={size}/>
         ))
       }
       </div>
     ) 
    }
  
}

export default Library;