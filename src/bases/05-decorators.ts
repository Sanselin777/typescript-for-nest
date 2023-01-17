class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream(): void {
    console.log(`Hello!`);
  }

  speak(): void {
    console.log(`HI!!!`);
  }
}

export const MyDecorator = () => {
  return (target: Function) => {
    return NewPokemon;
  };
};
/* decorators are function, with something special,  */
/* the decorator is the definition of the class , can access to the definition
can expand, extend, add functionalities. remove functionalities, many things */

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream(): void {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak(): void {
    console.log(`${this.name} ${this.name}!!!`);
  }
}
