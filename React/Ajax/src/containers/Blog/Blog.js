import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Dewald"
        };
      });
      this.setState({ posts: updatedPosts });
    })
    .catch( error => {
      console.log(error)
    });
  }

  postSelectedFunction = (id) => {
    this.setState({selectedPostId: id})
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post 
      key={post.id} 
      title={post.title} 
      author={post.author} 
      clicked={() => this.postSelectedFunction(post.id)}/>;
    });

    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li><a href = "/">Home</a></li>
              <li><a href = "/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>


        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
