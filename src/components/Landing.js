import { useContext } from 'react';

import { Link } from 'react-router-dom';

import ThemeContext from '../store/theme-context';

const Landing = (props) => {
  const ctx = useContext(ThemeContext);

  const themes = {};

  if (ctx.isDarkMode) {
    themes.list = 'list-group-item text-white bg-dark border-bottom-0';
    themes.link = 'btn btn-outline-light';
    themes.div = 'container text-white text-center pt-5';
  } else {
    themes.list = 'list-group-item text-dark bg-light border-bottom-0';
    themes.link = 'btn btn-outline-dark';
    themes.div = 'container text-dark text-center pt-5';
  }

  const links = props.links.map((i) => {
    return (
      <li className={themes.list} key={i.url}>
        <Link to={'watchlists' + i.url} className={themes.link}>
          {i.title}
        </Link>
      </li>
    );
  });

  return (
    <div className="container">
      <div id="header" className={themes.div}>
        <h1 className="display-1">stock-spike</h1>
        <p className="lead">Free analysis based on strategies from reddit</p>
        <ul className="list-group list-group-flush">{links}</ul>
      </div>
    </div>
  );
};

export default Landing;
