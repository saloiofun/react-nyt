import React from 'react'
import { Card, CardHeader, CardBody } from '../../components/Card'
import { FormGroup } from '../../components/Form'
import { Button } from '../../components/Buttons'
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
          <form>
            <FormGroup 
              header='Topic'
              type='text'
              label='topic'
              value={this.state.topic}
              onChange={this.handleInputChange}
              name='topic'
              required
            />
            <FormGroup 
              header='Start Year'
              type='number'
              label='startYear'
              min='0'
              value={this.state.startYear}
              onChange={this.handleInputChange}
              name='startYear'
              required
            />
            <FormGroup 
              header='End Year'
              type='number'
              label='endYear'
              min='0'
              value={this.state.endYear}
              onChange={this.handleInputChange}
              name='endYear'
              required
            />
            <Button
              onClick={this.handleFormSubmit}
              type='submit'
              className='btn btn-info float-right btn-lg text-white'              
            >Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    )
  }
}

export default Search
