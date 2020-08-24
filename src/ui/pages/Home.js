import React from 'react';
import { Link } from 'react-router-dom';
import paths from 'constants/paths';

const Home = () => {
  return <div>
    <h1>Home</h1>
    <Link to={paths.projects}>Projects</Link>
  </div>
};

export default Home;
