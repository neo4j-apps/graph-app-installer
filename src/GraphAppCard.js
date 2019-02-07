import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, List } from 'semantic-ui-react';

const defaultIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDQuODEgNDgiPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMjIuNCIgeTE9IjQ3Ljg4IiB4Mj0iMjIuNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2NGIxNDUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA4Y2MxIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDx0aXRsZT5HcmFwaC1hcHBzLWRlZmF1bHQ8L3RpdGxlPgogICAgPHBhdGgKICAgICAgICBkPSJNNDQuNSw0Mi40Yy0uNDQtMS4wNi0xLTIuMS0xLjQ0LTMuMTRsLTEuNDQtMy4xMkw0MC4xOCwzM2MtLjQ3LTEtMS0yLjA4LTEuNDMtMy4xMmwtMS40NC0zLjE0Yy0uNDgtMS0xLTIuMDgtMS40My0zLjEybC0xLjQ0LTMuMTRMMzMsMTcuMzZjLS40Ny0xLTEtMi4wOC0xLjQzLTMuMTJMMzAuMTMsMTEuMSwyOC42OSw4Yy0uNDgtMS0xLTIuMDktMS40My0zLjEzQzI2LjU0LDMuMjksMjYsMS4zOCwyNC40LjUxYTQuMTUsNC4xNSwwLDAsMC00LjUzLjM2LDYuMzcsNi4zNywwLDAsMC0xLjcsMi42MkwxNi43Myw2LjYzYy0uNDgsMS0xLDIuMDgtMS40MywzLjEybC0xLjQ0LDMuMTJMMTIuNDIsMTZjLS40NywxLS45NSwyLjA4LTEuNDMsMy4xMkw5LjU1LDIyLjI3Yy0uMjMuNS0uNDgsMS0uNjksMS41MS0uNTctLjMtMS4xNi0uNTctMS43My0uODVhNi44Nyw2Ljg3LDAsMCwwLTMuMDYtMSw0LDQsMCwwLDAtMS43MSw3LjcybDEuNzQuODYuODcuNDJhMS44MSwxLjgxLDAsMCwxLC40NC4yMmMuMDcuMDgsMCwwLDAsLjE1cy0uMDguMTYtLjExLjIzTDMuNjksMzUsMi4wNywzOC41OEMxLjUyLDM5Ljc2LDEsNDAuOTMuNDQsNDIuMTFhNC4wOCw0LjA4LDAsMCwwLDUuODQsNS4yNiw2LjA4LDYuMDgsMCwwLDAsMi4wOC0yLjk0bC44LTEuNzUsMS42Mi0zLjU0Yy41NS0xLjE4LDEuMDktMi4zNiwxLjYzLTMuNTQuMTMtLjI4LjI3LS41Ni4zOS0uODQsMS44NywxLDMuNzgsMS44Niw1LjY3LDIuNzhsNS42NiwyLjc5LDUuNjcsMi43OCw1LjY2LDIuNzgsMi44NSwxLjRhOCw4LDAsMCwwLDEuMTIuNSw0LjIsNC4yLDAsMCwwLDIuMjUuMUE0LjA2LDQuMDYsMCwwLDAsNDQuNSw0Mi40Wk0zMi4yMSwzNS4yNWMtMS44OS0xLTMuODQtMS44OS01Ljc2LTIuODNMMjAuNywyOS42bC0yLjg3LTEuNDItMS40NC0uN2MtLjE2LS4wOC0uMi0uMDUtLjE2LS4yMWEyLjE4LDIuMTgsMCwwLDEsLjE4LS4zOGwuMzQtLjc1LDIuNjYtNS43OXExLjM0LTIuOTMsMi42OC01LjgzYy4xLS4yMy4yMi0uNDYuMzEtLjY5LjU5LDEuNDEsMS4yOCwyLjc4LDEuOTIsNC4xN2wxLjkyLDQuMTljLjY0LDEuNCwxLjI5LDIuNzksMS45Myw0LjE5bDEuOTIsNC4xOUwzMiwzNC43NWwuMjQuNTJaIgogICAgICAgIHN0eWxlPSJmaWxsOnVybCgjYSkiLz4KPC9zdmc+Cg=="

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
      <Card.Content className="graphAppCard__image">
          <Image src={app.image || defaultIcon} />
      </Card.Content>
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
