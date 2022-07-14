const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark">
      <div className="container text-center pt-2">
        <p className="text-white">
          Data provided for entertainment value with zero warranty. Not
          financial advice.
        </p>
        <p className="text-white">Copyright © {year} Joe Tatusko</p>
      </div>
    </footer>
  );
};

export default Footer;
