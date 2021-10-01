
import './App.scss';
import Messager from './pages/Messager';
import ThemeMode from './components/ThemeMode';
import { Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

      <ThemeMode />
      <Messager/>

      {/* <Route path="/" exact component={Messager} /> */}
      {/* <Login /> */}

    </div>

  );
}

export default App;
