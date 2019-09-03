import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import Form from "./components/Form";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushiCollection: [],
    sushiIndex: 0,
    eatenSushi: [],
    budget: 100
  };
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiCollection =>
        this.setState({ sushiCollection: sushiCollection })
      )
      .catch(e => console.error(e));
  }

  beenEaten = sushi => {
    const col = this.state.sushiCollection;
    const i = col.indexOf(sushi);
    console.log("i am eating sushi number ", i);
    // debugger;
    if (this.state.budget >= sushi.price) {
      this.setState({
        sushiCollection: [
          ...col.slice(0, i),
          { ...sushi, beenEaten: true },
          ...col.slice(i + 1)
        ],
        eatenSushi: [...this.state.eatenSushi, sushi],
        budget: this.state.budget - sushi.price
      });
    }
  };

  handleForm = event => {
    event.preventDefault();
    const newBudget = (this.state.budget += parseInt(event.target[0].value));
    this.setState({ budget: newBudget });
  };

  nextSushi = () => {
    if (this.state.sushiIndex + 4 < this.state.sushiCollection.length) {
      this.setState({ sushiIndex: this.state.sushiIndex + 4 });
    } else {
      this.setState({ sushiIndex: 0 });
    }
  };

  renderSushi = () => {
    return this.state.sushiCollection.slice(
      this.state.sushiIndex,
      this.state.sushiIndex + 4
    );
  };

  render() {
    // debugger;
    return (
      <div className="app">
        <SushiContainer
          sushis={this.renderSushi()}
          nextSushi={this.nextSushi}
          beenEaten={this.beenEaten}
          eatenSushi={this.state.eatenSushi}
        />
        <Table
          sushis={this.renderSushi()}
          beenEaten={this.beenEaten}
          eatenSushi={this.state.eatenSushi}
          budget={this.state.budget}
        />
        <Form budget={this.state.budget} onSubmit={this.handleForm} />
      </div>
    );
  }
}

export default App;
