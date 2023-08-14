import React from "react";
import "./App.css";
import Homepage from "./Homepage";

import FAQs from "./Faq";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

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

      <FAQs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
