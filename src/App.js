import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuotes from "./pages/NewQuotes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuotes />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;