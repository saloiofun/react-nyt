import React from 'react'
import { Card, CardHeader, CardBody } from '../../components/Card'
import { Topic, StartYear, EndYear } from '../../components/Form'
import { SubmitBtn } from '../../components/Buttons'
import API from "../../utils/API";

class Search extends React.Component {
  state = {
    topic: '',
    startYear: '',
    endYear: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render () {
    return (
      <Card>
        <CardHeader header='Query' />
        <CardBody>
          <Topic />
          <StartYear />
          <EndYear />
          <SubmitBtn>Submit</SubmitBtn>
        </CardBody>
      </Card>
    )
  }
}

export default Search
