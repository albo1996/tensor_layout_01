class Student {
    constructor(params) {
       this.fullName = params.fullName;
       this.university = params.university;
       this.course = params.course;
       this.birthDate = params.birthDate;
       this.photoUrl = params.photoUrl;
    }
    
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

