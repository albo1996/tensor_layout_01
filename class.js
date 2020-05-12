class Student {
   constructor(params) {
      this.fullName = params.fullName;
      this.university = params.university;
      this.course = params.course;
      this.birthDate = params.birthDate;
      this.photoUrl = params.photoUrl;
   }
   
  }
  function appendStudentBlock(student) {
     let div = document.createElement('div');
    div.className = "person";
    document.body.append(div);

    let img = document.createElement('img');
    img.className = "ava";
    img.src = student.photoUrl;
    div.append(img);

    let div1 = document.createElement('div');
    div1.className = "name";
    div1.innerHTML = student.fullName;
    div.append(div1);

    let span = document.createElement('span');
    span.className = "university";
    span.innerHTML = student.university;
    div.append(span); 





  }
  
  const studentArr = [
{
fullName: 'Маша Иванова',
university: 'УГАТУ',
course: 2,
birthDate: new Date(2000, 0, 1),
photoUrl: 'img/ava02.jpg'
}
];
studentArr.forEach((item) => {
const student = new Student(item);
appendStudentBlock(student);
});

