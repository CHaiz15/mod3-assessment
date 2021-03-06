import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUrl } from '../../actions';
import { postUrl } from '../../apiCalls';



export class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    postUrl(this.state)
    .then(res => this.props.addUrl(res))
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export const mapStateToProps = state => ({
  urls: state.urls,
})

export const mapDispatchToProps = dispatch => ({
  addUrl: url => dispatch(addUrl(url)),
})

export default connect(null, mapDispatchToProps)(UrlForm);
