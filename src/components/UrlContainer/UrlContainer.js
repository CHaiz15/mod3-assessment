import React, { Component } from 'react';
import './UrlContainer.css';
import { getUrls, deleteUrl } from '../../apiCalls';
import { connect } from 'react-redux'
import { setUrls, deleteSelectedUrl } from '../../actions';

export class UrlContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    getUrls()
      .then(data => this.props.setUrls(data.urls))
      .catch(err => console.error('Error fetching:', err));
  }

  removeUrl(url) {
    deleteUrl(url)
    this.props.deleteSelectedUrl(url)
  }

  render() {
    const { urls } = this.props;
    const urlEls = urls.map(url => {
      return (
        <div className="url">
          <h3>{url.title}</h3>
          <a href={url.short_url} target="blank">{url.short_url}</a>
          <p>{url.long_url}</p>
          <button onClick={() => this.removeUrl(url)}>Delete</button>
        </div>
    )
  })

  return (
      <section>
        { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  urls: state.urls,
})

export const mapDispatchToProps = dispatch => ({
  setUrls: urls => dispatch(setUrls(urls)),
  deleteSelectedUrl: url => dispatch(deleteSelectedUrl(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer);
