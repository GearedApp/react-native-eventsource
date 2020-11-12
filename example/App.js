/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
"use strict";
import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import EventSource from "../index.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.source = null;
    this.state = {
      url:
        "https://rides.cloudtasks.io/api/cars/change-stream?_format=event-source&access_token=dcl2JYPPdgDqbGTkVesZ61qzP6AawMJz",
    };
  }

  componentDidMount() {
    this.source = new EventSource(this.state.url);

    this.source.onopen = function () {
      console.log("EventSource::onopen");
    };

    this.source.onmessage = function (e) {
      console.log("EventSource::onmessage: ", e);
    };

    this.source.onerror = function (e) {
      console.log("EventSource::onerror: ", e);
    };
  }

  componentWillUnmount() {
    this.source.close();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default App;
