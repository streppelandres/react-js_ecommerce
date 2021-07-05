import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContianer/ItemDetailContainer";
import { NotFound404 } from './components/NotFound404/NotFound404';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="*" component={NotFound404} />
        </Switch>
      </BrowserRouter>
      {/* TODO: Footer */}
    </>
  );
}

export default App;