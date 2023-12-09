interface IUserFormatter {
  formatUser: () => string;
}

class User implements IUserFormatter {
  constructor(private fullName: string, private age: number) {}

  formatUser = () => {
    return `name: ${this.fullName}, age: ${this.age}`;
  };
}

const user1 = new User("Ashraful Islam", 24);
console.log(user1.formatUser());
