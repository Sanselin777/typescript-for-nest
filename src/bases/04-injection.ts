import { Move, PokeAPIResponse } from "../interfaces/poke-api.interface";
import {
  PokeApiAdapter,
  PokeApiFetchAdapter,
  HttAdapter,
} from "../api/pokeApi.adapter";
export class Pokemon {
  /* this points to the class instance */
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  /* short way of class */
  constructor(
    public readonly id: number,
    public name: string,
    private http: HttAdapter
  ) {}

  /* INJECTION DEPENDENCIES */
  // is add a dependency to the class to avoid  the class to be coupled to the class
  //for the class shouldn't have all functionality
  //our class should depend on the outside world, like axios for example
  //later if we want to change axios for another library we can do it without change the class

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
    const data = await this.http.get<PokeAPIResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    console.log(data.moves);
    return data.moves;
  }
}

const axiosHttp = new PokeApiAdapter();
const fetchHttp = new PokeApiFetchAdapter();
export const charmander = new Pokemon(4, "charmander", axiosHttp);

charmander.getMoves();
