import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import { ThemeProvider } from "@emotion/react";
// import Theme from "./components/ui/Theme";
import Loader from "./components/Loader";
import PageNotFound from "./pages/PageNotFound";

const Home = lazy(() => import("./pages/Home"));

function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <Suspense fallback={<Loader isLoading={isLoading} />}>
          {/* <ThemeProvider theme={Theme}> */}
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="*" component={PageNotFound} />
            </Switch>
          </Router>
          {/* </ThemeProvider> */}
        </Suspense>
      )}
    </>
  );
}

export default App;
