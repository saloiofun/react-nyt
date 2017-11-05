import React from 'react'
import { Card, CardHeader, CardBody } from '../../components/Card'
import { Topic, StartYear, EndYear } from '../../components/Form'
import { SubmitBtn } from '../../components/Buttons'
import API from "../../utils/API";

class Search extends React.Component {
  state = {
    result: {},
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

  searchTopic = ( topic, startYear, endYear ) => {
    API.search( topic, startYear, endYear )
    .then( res => this.setState({ result: res.data }))
    .catch( err => console.log( err ))
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if ( this.state.topic && this.state.startYear && this.state.endYear ) {
      this.searchTopic( this.state.topic, this.state.startYear, this.state.endYear )
    }
  };

  render () {
    return (
      <Card>
        <CardHeader header='Query' />
        <CardBody>
          <Topic 
            value={this.state.topic}
            onChange={this.handleInputChange}
            name="topic"
            required
          />
          <StartYear 
            value={this.state.startYear}
            onChange={this.handleInputChange}
            name="startYear"
            required
          />
          <EndYear 
            value={this.state.endYear}
            onChange={this.handleInputChange}
            name="endYear"
            required
          />
          <SubmitBtn
            onClick={this.handleFormSubmit}
          >Submit</SubmitBtn>
        </CardBody>
      </Card>
    )
  }
}

export default Search
