// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="count-value">{count}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
