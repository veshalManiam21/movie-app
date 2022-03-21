import { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../components/CategoryList";
import { loadMostPopular } from "../events/events";

function Home({ navigation }) {
  const dispatch = useDispatch();
  const mostPopular = useSelector((state) => state.reducer.mostPopular);

  const addFav = useSelector((state) => state.reducer.favourites);

  useEffect(() => {
    dispatch(loadMostPopular());
  }, []);

  return (
    <ScrollView>
      <View>
        <CategoryList
          headerTitle="Movie Categories"
          title="Most Searched Movies"
          dataList={mostPopular}
          navigation={navigation}
        />
        <CategoryList
          headerTitle="Movies to watch later"
          title="Your Watchlist"
          dataList={addFav}
          emptyMessage="No movies in your watchlist."
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
}

export default Home;
