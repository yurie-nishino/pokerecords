import React from "react";
import Form from "../component/form";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileData: "",
    };
    this.onFileSelect = this.onFileSelect.bind(this);
  }
  dispatchFileData(data) {
    this.setState({
      fileData: data,
    });
  }
  onFileSelect(file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.dispatchFileData(reader.result);
    };
    reader.readAsDataURL(file.target.files[0]);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Form onFileSelect={this.onFileSelect} />
      </div>
    );
  }
}

export default Forms;
