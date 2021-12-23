import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Section from "./Component/Section/Section";

export default class App extends Component {
  render() {
    return (
      <div className="App-Main">
        {/* ---------------------header */}
        <header className="App-Header">
          <Header />
        </header>
        {/* -------------------section */}
        <section className="App-Section">
          <div className="App-Section-Container">
            <div className="App-Section-row">
              <Section/>
            </div>
          </div>
        </section>
        <footer className="App-Footer">
          <i className="bi bi-activity"></i>
          برای امروز بسته خسته شدی سلطان
        </footer>
      </div>
    );
  }
}
