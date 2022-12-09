import React from "react";
import Header from "./features/Header";
import Footer from "./features/Footer";
import Songs from "./features/Songs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Songs />
      <Footer />
    </div>
  );
}

export default App;
