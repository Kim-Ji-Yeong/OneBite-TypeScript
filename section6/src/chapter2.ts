/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드
  // private name: string;
  // protected age: number;
  // position: string;

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee("jiYeong", 29, "developer");
// employee.name = "HANA";
// employee.age = 10;
employee.position = "디자이너";

console.log(employee);
