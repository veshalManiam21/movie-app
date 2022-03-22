import { StyleSheet, Text, View, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import MovieCard from "../components/MovieCard";
import LoadingIndicator from "./LoadingIndicator";

function CategoryList({
  navigation,
  dataList,
  headerTitle,
  title,
  emptyMessage,
}) {
  return (
    <>
      <Text style={styles.headerText}>{headerTitle}</Text>
      <View style={[styles.container, tw`p-4`]}>
        <Text style={styles.titleText}> {title}</Text>
        {dataList && dataList.items.length ? (
          <ScrollView horizontal={true} nestedScrollEnabled={true}>
            {dataList.items.map((movie, idx) => {
              const movieData = {
                id: movie.id,
                rank: movie.rank,
                title: movie.title,
                image: movie.image,
                imDbRating: movie.imDbRating,
              };
              return (
                <MovieCard
                  movieData={movieData}
                  key={idx}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        ) : emptyMessage ? (
          <Text style={tw`text-white`}>{emptyMessage}</Text>
        ) : (
          <LoadingIndicator />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d0d0d",
  },
  titleText: {
    color: "white",
    borderLeftColor: "#f5c518",
    borderLeftWidth: 3,
    fontWeight: "bold",
    letterSpacing: 1.1,
    marginBottom: 16,
    fontSize: 16,
  },
  headerText: {
    color: "#f5c518",
    fontWeight: "bold",
    letterSpacing: 1.1,
    marginBottom: 16,
    paddingLeft: 16,
    paddingTop: 16,
    fontSize: 16,
  },
});

export default CategoryList;
