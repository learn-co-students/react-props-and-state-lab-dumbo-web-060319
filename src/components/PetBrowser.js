import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.map(i => <Pet key={i.id} pet={i} onAdoptPet={this.props.onAdoptPet} />)}
    </div>
  }
}

export default PetBrowser
