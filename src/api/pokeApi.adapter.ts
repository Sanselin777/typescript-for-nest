//when use the word adapter, usually is a from third party library, is a good practice
import axios from "axios";

export interface HttAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttAdapter {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
  }
}

export class PokeApiAdapter implements HttAdapter {
  private axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, body: any) {
    const { data } = await this.axios.post(url, body);
    return data;
  }
}
