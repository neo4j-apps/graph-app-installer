import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, List } from 'semantic-ui-react';

class GraphAppCard extends Component {
  constructor(props) {
    super(props)
    this.state = {installing: false}
    this.handleInstall = this.handleInstall.bind(this)
  }

  handleInstall(e) {
    if (this.state.installing) {
      e.preventDefault()
      e.stopPropagation()
    }

    this.setState({installing: true})
    setTimeout(() => {this.setState({installing: false})}, 10000)
  }

  render() {
    const {app} = this.props;
    const linkClasses = 'ui primary button' + (this.state.installing ? ' disabled' : '')
    return <Card className="graphAppCard">
      <Card.Content className="graphAppCard__header">
        <Card.Header><a href={app.homepage} target="_blank" rel="noopener noreferrer">{app.title}</a></Card.Header>
      </Card.Content>
      {app.image && <Card.Content className="graphAppCard__image">
          <Image src={app.image} />
      </Card.Content>}
      <Card.Content className="graphAppCard__content">
        <List>
          <List.Item>
            <List.Content>{app.description}</List.Content>
          </List.Item>
          {app.author && <List.Item>
            <List.Icon name='user' />
            <List.Content>{app.author}</List.Content>
          </List.Item>}
          {app.official && <List.Item>
            <List.Icon name='info circle' />
            <List.Content>Provided By Neo4j</List.Content>
          </List.Item>}
        </List>
      </Card.Content>
      <Card.Content className="graphAppCard__footer">
        <List>
          <List.Item>
            <List.Content>
              <a
                className={linkClasses}
                rel="noopener noreferrer"
                href={`neo4j://graphapps/install?url=${encodeURI(app.installUrl)}`}
                disabled={this.state.installing}
                onClick={this.handleInstall}
              >Install</a>
            </List.Content>
          </List.Item>
        </List>
      </Card.Content>
    </Card>;
  }
}

GraphAppCard.propTypes = {
  app: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
};

export default GraphAppCard;
