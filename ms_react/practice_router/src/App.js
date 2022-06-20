import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Menubar from './pages/Menubar';
import Movie from './pages/Movie';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<Movie />} />
        </Route>
      </Route>
      <Route path="*" element={<div>There's nothing here!</div>} />
    </Routes>
  );
};

export default App;