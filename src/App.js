import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookContainer from './components/bookContainer/BookContainer';
import Nav from './components/navbar/Navbar';
import Categories from './components/category/Category';
import './App.css';
import store from './redux/configurestore';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<BookContainer />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
