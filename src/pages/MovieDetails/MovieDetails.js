import { useParams, Outlet, useLocation } from 'react-router-dom';
import { detailsMovie } from 'API';
import { useEffect, useState, Suspense } from 'react';
// import { placeholderURL} from '../../utils/imageURL';
import {
  Image,
  Information,
  Card,
  Links,
  List,
  Item,
  NavLinks,
} from './MovieDetails.styled';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const placeholderURL = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"

const MovieDetails = () => {
  const [details, setdetails] = useState(null);
  const { movieId } = useParams();
  const [genreList, setGenreList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    detailsMovie(movieId)
      .then(details => {
        setdetails(details);
        const genreList = [];
        details.genres.forEach(({ name }) => genreList.push(name));
        setGenreList(genreList);
      })
      .catch(error => {
        return console.log(error);
      });
  }, [movieId]);

  const releaseYear = new Date(details?.release_date);
  const back = location.state?.from ?? '/';

  return (
    <div>
      <NavLinks to={back}>Go back</NavLinks>
      {details&&
      <Card>
        <Image
          src={details.poster_path ? `${BASE_IMAGE_URL}${details?.poster_path}`:placeholderURL}
          alt={details?.title}
          width="300"
        />
        <Information>
          <h2>
            {details.title} ({releaseYear.getFullYear()})
          </h2>
          <p>User score: {details?.vote_count} </p>
          <h3>Overview</h3>
          <p>{details?.overview}</p>
          <h4>Genres</h4>
          <p>{genreList.join(', ')}</p>
        </Information>
      </Card>}
      <List>
        <p>Additional information</p>
        <Item>
          <Links to="cast" state={{ from: back }}>
            Cast
          </Links>
        </Item>
        <Item>
          <Links to="reviews" state={{ from: back }}>
            Reviews
          </Links>
        </Item>
      </List>
      <Suspense fallback={<h1>Movie Details to be appeared</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
