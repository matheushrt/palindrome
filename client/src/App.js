import React, { Component } from 'react';

//  style
import './App.css';

//  helpers
import { palindromeChecker } from './helpers';

class App extends Component {
  state = {
    inputText: '',
    isPalindrome: false,
    notPalindrome: false
  };

  inputHandler = e => {
    const { value } = e.target;

    this.setState({ inputText: value, isPalindrome: false, notPalindrome: false });
  }

  submitHandler = e => {
    e.preventDefault();

    palindromeChecker(this.state.inputText)
      .then(res => res.status === 200 ? this.setState({ isPalindrome: true }) : null)
      .catch(err => {
        console.log(err)
        this.setState({ notPalindrome: true })
      });
  }

  render() {
    return (
      <div className="App">
        <form className="text-input" onSubmit={this.submitHandler} >
          <input onChange={this.inputHandler} type="text" id="input-field" placeholder="Type your word and press Enter" />
          <label htmlFor="input1">Palindrome Test</label>
        </form>
        {
          this.state.isPalindrome &&
          <h4>Is Palindrome!</h4>
        }
        {
          this.state.notPalindrome &&
          <h5>Not a Palindrome!</h5>
        }
      </div>
    );
  }
}

export default App;
