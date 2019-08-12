import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  makePetsCards = () => {
    const petsArray = this.props.pets
    return petsArray.map(pet => (
      <Pet 
      key={pet.id}
      pet={pet}
      onAdoptPet={this.props.onAdoptPet}
      />
    ))
  }

  render() {

    return (
    <div className="ui cards">
      {this.makePetsCards()}
    </div>
    )
  }
}

export default PetBrowser
