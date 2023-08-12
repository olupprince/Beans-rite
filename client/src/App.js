import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
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
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
