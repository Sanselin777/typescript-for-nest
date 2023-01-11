//when use the word adapter, usually is a from third party library, is a good practice
import axios from "axios";
export class PokeApiAdapter {
  private axios = axios;

  async get(url: string) {
    const { data } = await this.axios.get(url);
    return data;
  }

  async post(url: string, body: any) {
    const { data } = await this.axios.post(url, body);
    return data;
  }
}
