import {Redirect, Route, Switch} from "react-router-dom";
import Language from "./components/pages/languageSelection";
import MainPageRus from "./components/pages/mainPageRus";
import MainPageKgz from "./components/pages/mainPageKgz";
import './App.css';

function App() {

  return (
    <div className="App">
        <Switch>
            <Route exact path="/language" component={Language} />
            <Route exact path="/eventRU" component={MainPageRus} />
            <Route exact path="/eventKG" component={MainPageKgz} />
        </Switch>
        <Redirect exact from="/" to="/language" />
    </div>
  );
}

export default App;