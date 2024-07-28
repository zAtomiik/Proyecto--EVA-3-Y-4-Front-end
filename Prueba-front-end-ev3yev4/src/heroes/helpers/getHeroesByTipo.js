import { heroes } from "../data/heroes";

export const getHeroesByTipo = ({tipo}) => {
    const validTypes = ['anime','comics'];
  
    if (!validTypes.includes(tipo)) {
      throw new Error(`El tipo no se encuentra: "${tipo}"`);
    }
    return heroes.filter(hero => hero.tipo === tipo);
}
  