class Student {
    constructor(fullName, university, course, birthDate, photoUrl) {
       this.fullName = fullName;
       this.university = university;
       this.course = course;
       this.birthDate = birthDate;
       this.photoUrl = photoUrl;
    }
    
   }
   appendStudentBlock(n) {
    let div = document.createElement('div');
    div.className = "name";
    div.innerHTML = fullName;
    let span = document.createElement('span');
    div.className = "university";
    div.innerHTML = university;
  
    document.body.append(div);

   }
   const studentArr = [
{
fullName: 'Маша Иванова',
university: 'УГАТУ',
course: 2,
birthDate: new Date(2000, 0, 1),
photoUrl: '/photo1'
}
];
studentArr.forEach((item) => {
const student = new Student(item);
appendStudentBlock(student);

});

