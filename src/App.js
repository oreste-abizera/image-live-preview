import React from "react";
import "./App.css";

function App() {
  const [file, setfile] = React.useState();
  const handleFile = (e) => {
    let tempFile = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        setfile(reader.result);
      },
      false
    );

    if (tempFile) {
      reader.readAsDataURL(tempFile);
    }
  };
  return (
    <form>
      <h1>Image Live Preview</h1>
      <input type="file" onChange={handleFile}></input>
      <div className="output">
        {file ? <img src={file}></img> : <p>Select an image to display it.</p>}
      </div>
    </form>
  );
}

export default App;
