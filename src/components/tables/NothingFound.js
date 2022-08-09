const NothingFound = (props) => {
  return (
    <div className="container">
      <h2 className={props.themes.h2}>{props.header}</h2>
      <em className={props.themes.em}>Updated: {props.d}</em>
      <h3 className={props.themes.h2 + ' mt-5 text-center'}>Nothing found!</h3>
      <p className={props.themes.h2 + ' text-center'}>
        Nothing checked made this watchlist today... maybe tomorrow!
      </p>
    </div>
  );
};

export default NothingFound;
