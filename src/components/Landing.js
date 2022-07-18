const Landing = (props) => {
  const links = props.links.map((i) => {
    return (
      <li className="list-group-item text-white bg-dark" key={i.url}>
        <a href={i.url} className="btn btn-outline-light">
          {i.title}
        </a>
      </li>
    );
  });

  return (
    <div className="container">
      <div id="header" class="container text-white text-center pt-5">
        <h1 class="display-1">stock-spike</h1>
        <p class="lead">Free analysis based on strategies from reddit</p>
        <ul className="list-group list-group-flush">{links}</ul>
      </div>
    </div>
  );
};

export default Landing;
