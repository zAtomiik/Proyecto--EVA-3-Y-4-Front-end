import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getHeroesById } from "../helpers/getHeroesById";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = getHeroesById(id); 

  useEffect(() => {
    if (!hero) {
      Swal.fire({
        icon: 'error',
        title: 'Heroe no encontrado',
        text: `El héroe con id "${id}" no existe.`,
        showCancelButton: true,
        confirmButtonText: 'Ver Animes',
        cancelButtonText: 'Ver Comics',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/animes');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigate('/comics');
        }
      });
    }
  }, [hero, id, navigate]);

  if (!hero) return null;

  return (
    <div style={{ backgroundColor: '#F5F7F8', minHeight: '100vh', paddingTop: '20px' }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mb-4 shadow-sm">
              <img 
                src={`/assets/heroes/${hero.id}.jpg`} 
                className="card-img-top img-fluid" 
                alt={`Imagen de ${hero.nombre}`} 
              />
              <div className="card-body">
                <h5 className="card-title">{hero.nombre}</h5>
                <p className="card-text"><strong>Tipo:</strong> {hero.tipo}</p>
                <p className="card-text"><strong>Origen:</strong> {hero.origen}</p>
                <p className="card-text"><strong>Descripción:</strong> {hero.descripcion}</p>
                <div className="d-grid gap-3 mt-auto">
                  <button className="btn btn-primary" onClick={() => navigate(-1)}>Volver</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
