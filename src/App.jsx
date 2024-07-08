import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import Home from './pages/Home';
import './style.css';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/courses.json') // Assuming the JSON file is in the public directory
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setCourses(data.courses))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
   
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>All</NavLink>
            </li>
            <li>
              <NavLink to="/fullstack" className={({ isActive }) => (isActive ? 'active' : '')}>Full Stack Development</NavLink>
            </li>
            <li>
              <NavLink to="/datascience" className={({ isActive }) => (isActive ? 'active' : '')}>Data Science</NavLink>
            </li>
            <li>
              <NavLink to="/cybersecurity" className={({ isActive }) => (isActive ? 'active' : '')}>Cyber Security</NavLink>
            </li>
            <li>
              <NavLink to="/career" className={({ isActive }) => (isActive ? 'active' : '')}>Career</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home courses={courses} />} />
          <Route path="/fullstack" element={<FullStack courses={courses.filter(course => course.category === 'FullStack')} />} />
          <Route path="/datascience" element={<DataScience courses={courses.filter(course => course.category === 'DataScience')} />} />
          <Route path="/cybersecurity" element={<CyberSecurity courses={courses.filter(course => course.category === 'CyberSecurity')} />} />
          <Route path="/career" element={<Career courses={courses.filter(course => course.category === 'Career')} />} />
        </Routes>
      </div>
    
  );
}

export default App;
