import { useContext } from 'react';

import ThemeContext from '../../store/theme-context';

const Footer = (props) => {
  const year = new Date().getFullYear();

  const ctx = useContext(ThemeContext);

  const themes = {};

  if (ctx.isDarkMode) {
    themes.footer = 'footer bg-dark';
    themes.link = 'link-light';
    themes.p = 'text-white';
    themes.label = 'form-check-label text-white';
  } else {
    themes.footer = 'footer bg-light';
    themes.link = 'link-dark';
    themes.p = 'text-dark';
    themes.label = 'form-check-label text-dark';
  }

  return (
    <footer className={themes.footer}>
      <div className="container text-center pt-2">
        <a
          className={themes.link}
          href="https://github.com/joetats/stock-spike-frontend"
        >
          I'm open source!
        </a>
        <p className={themes.p}>
          Data provided for entertainment value with zero warranty. Not
          financial advice.
        </p>
        <div className="row justify-content-center">
          <div className="col-5 col-sm-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onChange={props.onChangeTheme}
                checked={ctx.isDarkMode}
              />
              <label className={themes.label} for="flexSwitchCheckDefault">
                Dark Mode!
              </label>
            </div>
          </div>
        </div>

        <p className={themes.p}>Copyright © {year} Joe Tatusko</p>
      </div>
    </footer>
  );
};

export default Footer;
