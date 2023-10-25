import { useState } from "react";
import Card from "./Card";

function Cards(props) {

    let courses = props.courses;
    let category = props.category;

    let checkError = props.checkError;


    const [likedCourses, setLikeedCourses] = useState([]);

    function getCourses() {

        if (category === 'All') {
              let allCourses = [];

              Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                  allCourses.push(courseData);
                });
              });
            
        return allCourses;

        }
        else {
            //specific category data
            return courses[category];

        }
      

    }


   
  function checkCourse() {
    if (courses.length === 0) {
      return true;
    } else {
      return false;
    }
      }
    
    


    return (
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {checkCourse() ? (
          <div
            className="flex justify-center items-center text-white bold py-2
                        max-h-[10vh]   px-4 bg-slate-900"
          >
            No data found <span>{checkError}</span>
          </div>
        ) : (
          getCourses().map((course) => {
            return (
              <Card
                key={courses.id}
                course={course}
                likedCourses={likedCourses}
                setLikeedCourses={setLikeedCourses}
              />
            );
          })
        )}
      </div>
    );
}


export default Cards;