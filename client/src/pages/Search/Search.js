import React from 'react'
import { Card, CardHeader, CardBody } from '../../components/Card'
import { FormGroup } from '../../components/Form'
import { Button, Anchor } from '../../components/Buttons'
import { List, ListItem } from '../../components/List'
import API from "../../utils/API";


class Search extends React.Component {
  state = {
    result: {},
    topic: '',
    startYear: '',
    endYear: '',
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticle = (event, data) => {
    event.preventDefault()
    API.saveArticle({
      title: data.headline.main,
      date: data.pub_date,
      url: data.web_url    
    })
  }

  searchTopic = ( topic, startYear, endYear ) => {
    API.search( topic, startYear, endYear )
    .then( res => this.setState({ result: res.data.response.docs }))
    .catch( err => console.log( err ))
  }

  handleFormSubmit = event => {
    event.preventDefault()
    if ( this.state.topic && this.state.startYear && this.state.endYear ) {
      this.searchTopic( this.state.topic, this.state.startYear, this.state.endYear )
    }
  };

  render () {
    return (
      <div>
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
        {this.state.result.length ? (
          <Card>
            <CardHeader header='Results' />
            <CardBody>
            <List>
              {this.state.result.map((article, i) => (
                <ListItem key={i}>
                  <h4 className="mb-1">{article.headline.main}</h4>
                  <p className="mb-1">Date Published: {article.pub_date}</p>
                  <div className="text-right">
                    <Anchor
                      href={article.web_url}
                      target='_blank'
                      className='btn btn-primary mr-1'              
                    >View Article
                    </Anchor>
                    <Button
                      type='button'
                      className='btn btn-success'  
                      onClick={(e) => this.saveArticle(e, article)}            
                    >Save
                    </Button>
                  </div>
              </ListItem>
              ))}
            </List>
            </CardBody>
          </Card>          
        ) : (
          <List>
            <ListItem>
            No Results to Display
            </ListItem>
          </List>
        )}
      </div>
    )
  }
}

export default Search
