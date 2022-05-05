import { Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Мунаа танилцуулга веб хуудас, ReactJS, Styled Components, CSS, HTML, вэб апликэшин хөгжүүлэгч, геологи, уурхайн ашиглалтын геологи, нүүрсний ордын загварчлал."
        />
      </Helmet>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
