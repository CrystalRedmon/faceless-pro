import { Link, useRouteMatch } from 'react-router-dom';
import './Breadcrumbs.css';

function Breadcrumbs() {
  let match = useRouteMatch();
  let links = [
    { label: 'Education', path: 'Education' },
    { label: 'Experience', path: 'Experience' },
    { label: 'Skills', path: 'Skills' },
    { label: 'Complete Profile', path: 'VoluntaryIdentification' },
  ];

  return (
    <nav>
      <ul className="breadcrumb">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={`${match.url}${link.path}`} className={match.isExact ? 'active' : ''}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <h1>Complete your Profile</h1>
    </nav>
  );
}

export default Breadcrumbs;
