import React, { Component } from "react";
import QuoteComponent from "../components/QuoteComponent";
import "../css/quote.scss";

class QuoteContainer extends Component {
  state = {
    quotes: [],
    quote: {}
  };
  componentDidMount() {
    fetch("http://quotes.stormconsultancy.co.uk/popular.json")
      .then(res => res.json())
      .then(quotes => {
        this.setState({ quotes }, this.generate);
      });
  }
  generate = () => {
    const { quotes } = this.state;
    let randQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({ quote: randQuote });
    console.log(this.state.quote);
  };
  render() {
    const { quote } = this.state;
    return (
      <div className="quote-container">
        <div className="quote-box">
          <QuoteComponent quote={quote} generate={this.generate} />
        </div>
      </div>
    );
  }
}

export default QuoteContainer;
