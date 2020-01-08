import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import Post from "./components/post.js";
import PostForm from "./components/postForm.js";

import  store  from './store.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
