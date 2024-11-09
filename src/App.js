
import { Provider } from 'react-redux';
import './App.css';

import store from './components/utils/store';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
         <Body />
      </Provider>
    </div>
  );
}

export default App;
