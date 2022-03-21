import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites } from "../events/events";

import tw from "tailwind-react-native-classnames";

function MovieCard({ movieData, navigation }) {
  const dispatch = useDispatch();
  const favouritesId = useSelector((state) => state.reducer.favourites.itemsId);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MovieInfo", {
          id: movieData.id,
        });
      }}
    >
      <View style={tw`relative border w-32 rounded-xl mr-2`}>
        <View style={styles.image}>
          {!favouritesId.includes(movieData.id) ? (
            <TouchableOpacity
              onPress={() => dispatch(addToFavourites(movieData))}
              style={tw`absolute rounded-tl-lg z-50 justify-center items-center bg-yellow-400 w-6 h-6`}
            >
              <Image
                style={tw`w-3 h-3`}
                source={require("../assets/plus.png")}
              />
            </TouchableOpacity>
          ) : null}
          <Image
            style={tw`w-full h-full rounded-t-lg`}
            source={{
              uri: movieData.image,
            }}
          />
        </View>

        <View style={[tw`p-2 relative rounded-b-lg`, styles.bottomPart]}>
          <View style={styles.ratingContainer}>
            <Image
              style={[tw`w-3 h-3`]}
              source={require("../assets/star.png")}
            />
            <Text style={[tw`text-gray-300 font-bold`, styles.ratingFlex]}>
              {movieData.imDbRating !== "" ? movieData.imDbRating : 0}
            </Text>
          </View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[tw`text-white font-bold`, styles.movieTitle]}
          >
            {movieData.title}
          </Text>
          <Text style={[tw`text-white font-bold`, styles.movieTitle]}>
            Rank: {movieData.rank}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = new StyleSheet.create({
  bottomPart: {
    backgroundColor: "#1a1a1a",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingFlex: {
    flex: 1,
    paddingLeft: 4,
  },
  movieTitle: {
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1 / 1.2,
  },
});

export default MovieCard;
