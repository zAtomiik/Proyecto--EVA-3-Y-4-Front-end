import { getHeroesByTipo } from "../helpers/getHeroesByTipo";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = (tipo) => {
  const heroes = getHeroesByTipo(tipo);

  return (
    <>
      <h1 className="text-center">Listado</h1>
      <div className="container">
        <div className="row">
          {heroes.map(aux => (
            <div className="col-md-4 mb-4" key={aux.id}>
              <HeroeCard {...aux} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
