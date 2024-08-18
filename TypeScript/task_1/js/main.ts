/** Renders table based on a list of objects */
interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
  }
  interface Directors extends Teacher {
	numberOfReports: number;
  }
  const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };
  console.log(teacher3);
  const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };
  console.log(director1);
  const teacherList = [teacher3];
  
  function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
  }
  console.log(printTeacher('John', 'Doe'));
  
  interface Student {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
  } 
  
  interface classConstructor {
	new (firstName: string, lastName: string): Student;
  }
  
  class StudentClass implements Student {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	}
	 workOnHomework() {
	  return 'Currently working';
	}
	displayName(): string {
	  return this.firstName;
	}
  }
  const studentClass: StudentClass = new StudentClass('Jon', 'Jhon');
  console.log(studentClass.displayName());
  console.log(studentClass.workOnHomework());
