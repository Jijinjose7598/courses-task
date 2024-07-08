import React from 'react';
import '../style.css';

function Career({ courses }) {
  return (
    <div className="card-container">
      {courses.map(course => (
        <div key={course.id} className="card">
          <img src={course.image} alt={course.title} className="course-image" />
          <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p>Available Languages: Tamil and English</p>
              <p>EMI available</p>
          <a href={course.link}>Go to Course</a>
        </div>
      ))}
    </div>
  );
}

export default Career;
