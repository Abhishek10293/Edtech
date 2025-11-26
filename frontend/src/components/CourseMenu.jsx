import React, { useContext } from 'react'
import CourseCard from './ui/Card.jsx'
import { AppContext } from '@/context/AppContext'

function CourseMenu() {
  const {course}=useContext(AppContext);

return (
 <div>
  <p className="text-white text-5xl  md:text-center lg:text-center pt-10">Our Courses</p>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-90 overflow-auto">
    {course.map((item , index ) => (
      <CourseCard key={index} course={item} />
    ))}
  </div>
   </div>
);}

export default CourseMenu