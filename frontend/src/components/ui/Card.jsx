import React from "react";


const CourseCard = ({ course }) => {
  return (
    <div
      className="group w-80 h-90 bg-white rounded-2xl shadow-md hover:shadow-2xl 
      transition-all duration-300 transform hover:-translate-y-2 cursor-pointer 
      overflow-hidden border border-gray-200 mt-4"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-48 object-cover"
        />

        {/* Gradient Overlay on Hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
          opacity-0 group-hover:opacity-100 transition-all duration-300"
        ></div>

        {/* Course Category */}
        <span
          className="absolute top-3 left-3 bg-white/90 text-gray-800 
          px-3 py-1 text-xs font-semibold rounded-full shadow"
        >
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
          {course.name}
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          Instructor: <span className="font-semibold">{course.instructor.name}</span>
        </p>

        {/* Duration */}
        <div className="mt-4 flex items-center gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
            {course.duration}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;