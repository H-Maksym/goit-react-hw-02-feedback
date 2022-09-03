import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (100 * (this.state.good / this.countTotalFeedback())).toFixed() + '%'
    );
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <p>Please leave feedback</p>
        <button type="button" onClick={() => this.onLeaveFeedback('good')}>
          Good{' '}
        </button>
        <button type="button" onClick={() => this.onLeaveFeedback('neutral')}>
          Neutral{' '}
        </button>
        <button type="button" onClick={() => this.onLeaveFeedback('bad')}>
          Bad{' '}
        </button>
        <div>Statistics</div>
        {this.countTotalFeedback() === 0 ? (
          <p>No feedback given</p>
        ) : (
          <>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{this.countTotalFeedback()}</p>
            <p>Positive feedback:{this.countPositiveFeedbackPercentage()}</p>
          </>
        )}
      </div>
    );
  }
}
