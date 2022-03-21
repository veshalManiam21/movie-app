import { StyleSheet, Text, View, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import LoadingIndicator from "./LoadingIndicator";
import CastCard from "./CastCard";

function CastList({ dataList, headerTitle, title }) {
  return (
    <>
      <Text style={styles.headerText}>{headerTitle}</Text>
      <View style={[styles.container, tw`p-4`]}>
        <Text style={styles.titleText}> {title}</Text>
        {dataList ? (
          <ScrollView horizontal={true} nestedScrollEnabled={true}>
            {dataList.map((cast, idx) => {
              const castDat = {
                image: cast.image,
                name: cast.name,
                asCharacter: cast.asCharacter,
              };
              return <CastCard key={idx} castData={castDat} />;
            })}
          </ScrollView>
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

export default CastList;
