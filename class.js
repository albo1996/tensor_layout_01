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
     div.setAttribute('class', 'person');
     let img = document.createElement('img');
     img.setAttribute('class', 'ava');
     img.src = this.photoUrl;
     div.append(img);
     let div1 = document.createElement('div');
     div1.setAttribute('class','name');
     div1.innerHTML = `${this.fullName}`;
     div.append(div1);
     let span = document.createElement('span');
     span.setAttribute('class','university');
     span.innerHTML = `${this.university}`;
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

