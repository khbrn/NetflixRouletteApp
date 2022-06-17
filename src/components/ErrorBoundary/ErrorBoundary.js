import "./ErrorBoundary.css";
import React, { Component } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 className="error-boundary">
          Oops, something went wrong... We are doing our best to fix the issue
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
