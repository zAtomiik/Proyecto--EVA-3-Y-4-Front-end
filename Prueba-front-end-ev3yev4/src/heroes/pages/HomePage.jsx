
export const HomePage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Bienvenido a nuestra Enciclopedia de Personajes</h1>
      <p className="text-center mb-5">Explora las diferentes secciones de nuestro sitio para descubrir más sobre tus personajes favoritos:</p>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Personajes de Animes</h5>
              <p className="card-text">
                Encuentra detalles sobre una amplia variedad de personajes de tus animes favoritos, incluyendo sus historias, poderes y relaciones.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Personajes de Comics</h5>
              <p className="card-text">
                Explora los perfiles de personajes icónicos de cómics, desde superhéroes hasta villanos, y descubre sus habilidades y aventuras.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Página de Login</h5>
              <p className="card-text">
                Inicia sesión para acceder a contenido detallado y exclusivo sobre los personajes, así como para personalizar tu experiencia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Página de Logout</h5>
              <p className="card-text">
                Cierra sesión para finalizar tu sesión de manera segura y proteger tu cuenta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
