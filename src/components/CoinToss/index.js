// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, imgHeads: true}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        imgHeads: true,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        imgHeads: false,
      }))
    }
  }

  render() {
    const {total, heads, tails, imgHeads} = this.state
    return (
      <div className="bgContainer">
        <div className="insideContainer">
          <h1 className="title">Coin Toss Game</h1>
          <p className="tagline">Heads (or) Tails</p>
          <img
            src={
              imgHeads
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            className="toss-image"
            alt="toss result"
          />
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="tossCount">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
