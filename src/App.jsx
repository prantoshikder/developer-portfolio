import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import { ThemeProvider } from "@emotion/react";
import Theme from "./components/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
