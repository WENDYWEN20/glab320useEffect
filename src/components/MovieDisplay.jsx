export default function MovieDisplay({ movie }) {
    //{movie} is defactoring here, de-construction, we can also use props, need to be props.movie.title
  //The component must return some JSX
console.log(movie)
  const loaded = () => {
    return (
      <>
      {movie.Error ? <h1>{movie.Error}</h1> :
       <div> 
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
        </div>}
      </>
    );
  };
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
}
