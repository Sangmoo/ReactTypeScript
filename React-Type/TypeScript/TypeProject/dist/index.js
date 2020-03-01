"use strict";
/*
import IPerson from './person/IPerson'
import Person, {makePerson} from './person/Person'

const testMakePerson = (): void => {
  let jane: IPerson = makePerson("Jane");
  let jack: IPerson = new Person("Jack");
  console.log(jane, jack);
}
testMakePerson();
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = __importDefault(require("./person/Person"));
var chance_1 = __importDefault(require("chance"));
var R = __importStar(require("ramda"));
var chance = new chance_1.default();
var persons = R.range(0, 2).map(function (n) { return new Person_1.default(chance.name(), chance.age()); });
console.log(persons);
//# sourceMappingURL=index.js.map