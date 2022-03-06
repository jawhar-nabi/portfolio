import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import ScrollToTopBtn from "./components/Back-to-top";
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    if (loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    return (
      <main text-gray-400 bg-gray-900 body-font>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <ScrollToTopBtn />

      </main>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

