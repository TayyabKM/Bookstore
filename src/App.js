import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookContainer from './components/bookContainer/BookContainer';
import Nav from './components/navbar/Navbar';
import Categories from './components/category/Category';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<BookContainer />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
