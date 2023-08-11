import React from "react";
import Homepage from "./Homepage";
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "" : data}</p>
      </header>
      <Homepage />
    </div>
  );
}

export default App;
