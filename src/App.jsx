import React, { useEffect, useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import { HashLoader } from 'react-spinners';
// import { ThemeProvider } from "@emotion/react";
// import Theme from "./components/ui/Theme";

function App() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false)
    }, 2000)
  }, []);
  return (
    <>
      {isLoading ? (
        <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <HashLoader color={"#fff"} isLoading={isLoading} size={80} />
        </div>
      ) : (
      // <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </Router>
      // </ThemeProvider>
      )}
    </>
  );
}

export default App;
