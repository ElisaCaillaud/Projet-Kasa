import "../../styles/error.scss";

function Error() {
  return (
    <div className="error-page">
      <p>404</p>
      <h1>Oops! La page que vous demandez n'existe pas.</h1>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default Error;
