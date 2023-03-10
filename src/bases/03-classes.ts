import axios from "axios";
import { Move, PokeAPIResponse } from "../interfaces/poke-api.interface";
export class Pokemon {
  /* this points to the class instance */
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  /* short way of class */
  constructor(public readonly id: number, public name: string) {}

  /* methods are functions inside of the class, has access to the properties */
  sayMyName(): void {
    console.log(this.name.toUpperCase());
    this.sayMyId();
  }

  /* by default when we don't specify everything in the class is public */
  private sayMyId(): void {
    console.log(this.id);
  }
  //with private we can't access to the method from outside the class

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    console.log(data.moves);
    return data.moves;
  }
}

export const charmander = new Pokemon(4, "charmander");

charmander.getMoves();
