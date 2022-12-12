import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from 'containers/pages/Home';
import Connect from 'containers/pages/Connect';
import Erorr404 from 'containers/errors/Erorr404';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element={<Erorr404 />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/connect' element={<Connect />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;


 