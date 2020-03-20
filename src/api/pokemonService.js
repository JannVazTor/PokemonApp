import { API_URL } from "../constants";

export async function getPokemonByName(name) {
    let response = await fetch(`${API_URL}/pokemon/${name}`);
    let data = await response.json();
    return data;
}