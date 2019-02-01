let Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let name = firstAndLast; 
  this.getFirstName = () => name.split(" ")[0];;
  this.getLastName = () => name.split(" ")[1];
  this.getFullName = () => name;
  this.setFirstName = (first) => name = first + " " + this.getLastName();
  this.setLastName  = (last)  => name = this.getFirstName() + " " + last;
  this.setFullName = (fullName) => name = fullName;
};

var bob = new Person('Bob Ross');
bob.getFullName();
