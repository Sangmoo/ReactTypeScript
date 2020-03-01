export function makePerson(name: string, age: number) {
  return { name: name, age: age };
}
export function testMakePerson() {
  console.log(makePerson('Sangmoo', 28), makePerson('Jack', 33));
}
