const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark">
      <div className="container text-center pt-2">
        <a
          className="link-light"
          href="https://github.com/joetats/stock-spike-frontend"
        >
          I'm open source!
        </a>
        <p className="text-white">
          Data provided for entertainment value with zero warranty. Not
          financial advice.
        </p>
        <div class="form-check form-switch col-5 mx-auto">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={props.onChangeTheme}
          />
          <label
            className="form-check-label text-white"
            for="flexSwitchCheckDefault"
          >
            Dark Mode!
          </label>
        </div>
        <p className="text-white">Copyright © {year} Joe Tatusko</p>
      </div>
    </footer>
  );
};

export default Footer;
