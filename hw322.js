function findTopStudent(students) {
    students.sort((a,b) => b.score - a.score || new Date(a.date) - new Date(b.date));
    if(students[0].score == 0){
        return students[0].name = [];
    } else {
        return students[0].name
    }
  }
  
  module.exports = findTopStudent;