import React from 'react';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
  }
  clickHandler = () => {
    this.setState({open: !this.state.open})
  }


  render() {
    const {open} = this.state
    return (
      <nav>
        <button onClick={this.clickHandler} className='burger'>Menu &#9776;</button>
        <ul className={open ? 'opened' : 'closed'}>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>

      </nav>
    )
  }
}
