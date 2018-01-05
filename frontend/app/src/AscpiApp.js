import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

class App extends Component {
  state = {
    questionIndex: 0
  }

  currentQuestion = allQuestions => {
    return allQuestions[this.state.questionIndex]
  }

  render() {
    console.log(this.props)
    if ('error' in this.props.questions) {
      console.log(this.props.questions.error)
    }

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
                <h1 className="title is-1">{this.currentQuestion(this.props.questions.allQuestions).content}</h1>
                {
                  this.currentQuestion(this.props.questions.allQuestions).choices.map(choice => {
                    return <div className="box">
                      <h2 className="subtitle">{choice.content}</h2>
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
    content
    choices {
      content
      isCorrect
    }
  }
}
`;

const AscpiApp = compose(
  graphql(AllQuestions, {name: "questions"})
)(App);

export default AscpiApp;