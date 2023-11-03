import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    // setMovie((prev) => ({ ...prev, ...json.data.movie }));
    setMovie(json.data.movie);
    setLoading(true);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <h1>
      {loading ? (
        <div>
          <img src={movie.url}></img>
        </div>
      ) : (
        "Loading..."
      )}
    </h1>
  );
}

export default Detail;
