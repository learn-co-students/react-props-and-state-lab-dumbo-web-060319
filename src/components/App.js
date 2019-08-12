import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (filterType) => {
    this.setState({filters: {type: filterType}})
  }

  formatFilterType = () => {
    const currentType = this.state.filters.type
    if (currentType === 'all') {
      return '/api/pets'
    } else {
      return `/api/pets?type=${currentType}`
    }
  }

  onFindPetsClick = (filterType) => {
    fetch(this.formatFilterType(filterType))
    .then(response => response.json())
    .then(data => this.setState({pets: data})
  )}

  onAdoptPet = (id) => {
    let newPetsArray = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet)
    this.setState({
      pets: newPetsArray
    })
  }

  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
