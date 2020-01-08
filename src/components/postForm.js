import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1> Add Posts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              type="text"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <input name="Submit" type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post.item
});

export default connect(null, { createPost })(PostForm);
