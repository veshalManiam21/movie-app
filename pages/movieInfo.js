import axios from "axios";
import { ScrollView } from "react-native";

function MovieInfo({ route }) {
  //   const getMovieDetails = async (id) => {
  //     return await axios
  //       .get(`https://imdb-api.com/en/API/Title/k_406ec6np/${id}`)
  //       .then((response) => response.data);
  //   };

  //   const data = getMovieDetails();

  console.log(route.params);

  return <ScrollView></ScrollView>;
}

export default MovieInfo;
