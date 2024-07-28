import { Link } from "react-router-dom";


export const HeroeCard = ({ id, nombre, tipo, origen, descripcion }) => {
  const imgSrc = `/assets/heroes/${id}.jpg`;
  return (
  <div className="card mb-3" style={{ maxWidth: '540px' }}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img
          className="card-img"
          src={imgSrc}
          alt={`Imagen de ${nombre}`}
          style={{
            objectFit: 'cover',
            width: '120%',
            height: '300px',
          }}
        />
      </div>
      <div className="col-md-8 d-flex flex-column">
        <div className="card-body d-grid text-center" style={{ gridTemplateRows: '1fr auto' }}>
          <div>
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{origen}</p>
          </div>
          <div className="d-grid gap-3">
            <Link to={`/hero/${id}`} className="btn btn-primary btn-block">
              Ver más...
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
