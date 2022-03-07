import React from "react";
import { Modal } from "antd";
import Head from "./components/Head/Head";
import Content from "./components/Content/Content";
import Foot from "./components/Foot/Foot";

import "antd/dist/antd.css";
import "./App.css";

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  componentDidMount() {}
  render() {
    return (
      <div className="app">
        <Head />
        <Content />
        <Foot />
      </div>
    );
  }
}

export default App;
