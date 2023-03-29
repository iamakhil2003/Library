import logo from './logo.svg';
import './App.css';
import Navbar from './Components.jsx/Navbar';
import Addbook from './Components.jsx/Addbook';

function App() {
  return (
    <div className="App">
      <browserRouter>
      <Navbar>
        <Routes>
          <Route path='Addbooks'element={Addbook data}={(
            genre:'',published:'',author:'',title:'',publishedby:''}
            method
          )}
        </Routes>
      </Navbar>
      </browserRouter>

    </div>
  );
}

export default App;
