import React from 'react'
import { Card, CardHeader, CardBody } from '../../components/Card'
import { Anchor } from '../../components/Buttons'
import { List, ListItem } from '../../components/List'
import API from '../../utils/API'

class Saved extends React.Component {
  state = {
    saves: []
  }
  componentDidMount () {
    this.loadSaves()
  }

  loadSaves = () => {
    API.getSaves()
    .then(res => this.setState({ saves: res.data }))
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        {this.state.saves.length ? (
          <Card>
            <CardHeader header='Saved Articles' />
            <CardBody>
              <List>
                {this.state.saves.map((article, i) => (
                  <ListItem key={i}>
                    <h4 className='mb-1'>{article.title}</h4>
                    <p className='mb-1'>Date Published: {article.date}</p>
                    <div className='text-right'>
                      <Anchor
                        href={article.url}
                        target='_blank'
                        className='btn btn-primary mr-1'
                    >View Article
                    </Anchor>
                    </div>
                  </ListItem>
              ))}
              </List>
            </CardBody>
          </Card>
        ) : (
          <List>
            <ListItem>
            No Saved Articles to Display
            </ListItem>
          </List>
        )}
      </div>
    )
  }
}

export default Saved
