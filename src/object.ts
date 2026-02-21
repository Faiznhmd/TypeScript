let user: { name: string; age: number; email: string } = {
  name: 'Faizan',
  age: 10,
  email: 'Faizan@gmail.com',
};

// this look messy so what can you do

interface newUser {
  name: string;
  age: number;
  email: string;
}
let newUser: newUser = {
  name: 'newUser',
  age: 10,
  email: 'ewUser@gmail.com',
};

// this look  perfect

//optinal type annotation(?) if you apply optional parameter then is your choice to add email or not
interface againnewUser {
  name: string;
  age: number;
  email?: string;
  readonly id: number;
}
let againnewUser: againnewUser = {
  name: 'newUser',
  age: 10,
  id: 1, // this is readonly you cannot update it
};

// interFace with methods
// this is called a methods
interface product {
  name: string;
  price: number;
  getDisdount(percent: number): number;
}

let product = {
  name: 'phn',
  price: 90,
  getDiscount(percent: number): number {
    return this.price * (percent / 100);
  },
};
