import React from 'react'

class Pet extends React.Component {

  handleAdoptClick = () => {
    const id = this.props.pet.id
    this.props.onAdoptPet(id)
  }
  
  render() {
    // console.log(this.props.pet)
    const name = this.props.pet.name
    const type = this.props.pet.type
    const age = this.props.pet.age
    const weight = this.props.pet.weight
    const isAdopted = this.props.pet.isAdopted

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted === true ? 
            <button className="ui disabled button">Already adopted</button>
            :
            <button onClick={this.handleAdoptClick} className="ui primary button">Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
