import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import CastList from "../components/CastList";
import MovieCard from "../components/MovieCard";
import { addToFavourites } from "../events/events";

function MovieInfo({ route, navigation }) {
  const [movieDetails, setMovieDetails] = useState({});
  const [trailerDetail, setTrailerDetails] = useState({});

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const getMovieDetails = useCallback(async (id) => {
    const movieDetails = await axios.get(
      `https://imdb-api.com/en/API/Title/k_me47fq31/${id}`
    );

    const videoData = await axios.get(
      `https://imdb-api.com/en/API/Trailer/k_me47fq31/${id}`
    );
    await setMovieDetails(movieDetails.data);
    await setTrailerDetails(videoData.data);
    await setIsDataLoaded(true);
  }, []);

  useEffect(() => {
    if (!isDataLoaded) {
      getMovieDetails(route.params.id);
    }
  }, []);

  const genres = isDataLoaded ? movieDetails.genres.split(",") : [];
  const dispatch = useDispatch();
  const favouritesId = useSelector((state) => state.reducer.favourites.itemsId);

  const movieData = {
    id: movieDetails.id,
    image: movieDetails.image,
    imDbRating: movieDetails.imDbRating,
    title: movieDetails.title,
    rank: movieDetails.rrank,
  };

  navigation.title = movieData.title;

  return isDataLoaded ? (
    <ScrollView>
      <View>
        <View style={tw`p-4`}>
          <Text style={tw`text-white text-xl`}>{movieDetails.title}</Text>
          <Text style={tw`text-gray-500`}>
            {movieDetails.year} - {movieDetails.runtimeStr}
          </Text>
        </View>
        <View>
          <Image
            source={{ uri: trailerDetail.thumbnailUrl }}
            style={styles.thumbnail}
          />
        </View>

        <View style={[tw`p-4 flex flex-row`, styles.container]}>
          <MovieCard
            isDetail={true}
            movieData={movieData}
            navigation={navigation}
          />
          <View style={tw`flex justify-between`}>
            <ScrollView horizontal={true} nestedScrollEnabled={true}>
              {genres.map((genre, index) => (
                <View
                  key={index}
                  style={tw`border-gray-500 border h-8 px-2 py-1 items-center justify-center rounded-md mr-2`}
                >
                  <Text style={tw`text-white text-xs`}>{genre}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={[styles.plotContainer, tw`w-3/4`]}>
              <Text
                numberOfLines={6}
                ellipsizeMode="tail"
                style={[tw`text-white`]}
              >
                {/* Break words */}
                {movieDetails.plot}
              </Text>
            </View>
          </View>
        </View>

        {!favouritesId.includes(movieData.id) ? (
          <View style={tw`p-4`}>
            <TouchableOpacity
              onPress={() => dispatch(addToFavourites(movieData))}
              style={[
                tw`rounded-lg z-50 flex flex-row justify-start items-center bg-gray-100 w-full `,
                styles.addtoWatch,
              ]}
            >
              <Image
                style={tw`w-3 h-3 mr-4`}
                source={require("../assets/white-plus.png")}
              />
              <Text style={tw`text-white `}>Add to Watchlist</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={[tw`p-4 pt-3 border-t border-gray-900`, styles.container]}>
          <View style={tw`flex flex-row justify-around items-center`}>
            <View style={tw`items-center`}>
              <Image
                style={[tw`w-3 h-3`]}
                source={require("../assets/star.png")}
              />
              <View
                style={tw`flex flex-row items-center justify-center text-center`}
              >
                <Text style={tw`text-white text-lg font-bold`}>
                  {movieDetails.imDbRating}
                </Text>
                <Text style={tw`text-gray-500`}>/10</Text>
              </View>
            </View>
            <View>
              <View style={tw`bg-green-400 p-1`}>
                <Text style={tw`text-white`}>
                  {movieDetails.metacriticRating}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <ScrollView horizontal={true} nestedScrollEnabled={true}>
          <View>
            <CastList
              headerTitle="The Team"
              title="Cast"
              dataList={movieDetails.actorList}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  ) : null;
}

const styles = new StyleSheet.create({
  addtoWatch: {
    backgroundColor: "rgba(59, 59, 59, 0.5)",
    padding: 16,
  },
  plot: {
    color: "white",
    fontSize: 18,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  plotContainer: {
    flexDirection: "row",
    flexGrow: 1,
  },
  votes: {
    position: "relative",
    top: "-10",
  },
  thumbnail: {
    aspectRatio: 16 / 9,
  },
  container: {
    backgroundColor: "#0d0d0d",
  },
});

export default MovieInfo;
