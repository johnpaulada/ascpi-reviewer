import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import swal from 'sweetalert';
require('./AscpiApp.css');

class App extends Component {
  state = {
    questionIndex: 0
  }

  currentQuestion = allQuestions => {
    return allQuestions[this.state.questionIndex % allQuestions.length]
  }

  selectAnswer = isCorrect => () => {
    if (isCorrect) {
      swal("Good job!", "You got the correct answer!", "success");
      this.setState({
        questionIndex: this.state.questionIndex + 1
      })
    } else {
      swal("Oops!", "That's not quite right.", "error");
    }
  }

  render() {
    // console.log(this.props)
    // if ('error' in this.props.questions) {
    //   console.log(this.props.questions.error)
    // }

    return <div>
      <section className="hero is-success is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              ASCPI Review App
            </h1>
            <h2 className="subtitle">
              Test your ASCPI know-how and get ready to pass the exam.
            </h2>
          </div>
        </div>
      </section>
      {
        (!this.props.questions.loading && 'allQuestions' in this.props.questions)
          ? <section className="section">
              <div className="container">
                <h1 className="title is-1">{this.currentQuestion(this.props.questions.allQuestions).question}</h1>
                {
                  this.currentQuestion(this.props.questions.allQuestions).answers.map(choice => {
                    return <div className="box" onClick={this.selectAnswer(choice.isCorrect)}>
                      <h2 className="subtitle">{choice.answer}</h2>
                    </div>
                  })
                }
              </div>
            </section>
          : null
      }
    </div>
  }
}

const AllQuestions = gql`
{
  allQuestions {
    question
    answers {
      answer
      isCorrect
    }
  }
}
`;

const AscpiApp = compose(
  graphql(AllQuestions, {name: "questions"})
)(App);

export default AscpiApp;