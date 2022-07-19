import { useEffect, useState, useContext } from 'react';

import { Collapse } from 'bootstrap';

import ThemeContext from '../../store/theme-context';

const NavBar = (props) => {
  const [toggle, setToggle] = useState(false);

  const ctx = useContext(ThemeContext);

  const themes = {};

  if (ctx.isDarkMode) {
    themes.nav =
      'navbar navbar-expand-md navbar-dark bg-dark fixed-top border-bottom';
  } else {
    themes.nav =
      'navbar navbar-expand-md navbar-light bg-light fixed-top border-bottom';
  }

  const links = props.links.map((i) => {
    return (
      <li className="nav-item" key={i.url}>
        <a href={i.url} className="nav-link">
          {i.title}
        </a>
      </li>
    );
  });

  useEffect(() => {
    const menu = document.getElementById('mainNavbar');
    const boostrapCollapse = new Collapse(menu, { toggle: false });
    toggle ? boostrapCollapse.show() : boostrapCollapse.hide();
  });

  return (
    <nav className={themes.nav}>
      <a href="/" className="navbar-brand px-2">
        <h3 className="mb-0">stock-spike</h3>
      </a>
      <button
        className="navbar-toggler mx-3"
        data-toggle="collapse"
        data-target="#mainNavbar"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav ms-auto px-2">{links}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
