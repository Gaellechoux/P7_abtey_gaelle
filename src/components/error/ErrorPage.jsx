import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="errorPage">
      <p className="errorNumber">404</p>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorLink">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
