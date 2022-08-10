const NothingFound = (props) => {
  return (
    <div>
      <h2>{props.header}</h2>
      <em>Updated: {props.d}</em>
      <h3>Nothing found!</h3>
      <p>Nothing checked made this watchlist today... maybe tomorrow!</p>
    </div>
  );
};

export default NothingFound;
