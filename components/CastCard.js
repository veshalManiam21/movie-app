import { Image, View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

function CastCard({ castData }) {
  return (
    <View style={tw`relative  w-32 mr-2`}>
      <View style={styles.image}>
        <Image
          style={tw`w-full h-full `}
          source={{
            uri: castData.image,
          }}
        />
      </View>
      <View style="w-full text-center">
        <Text numberOfLines={2} ellipsizeMode="tail" style={tw`text-white`}>
          {castData.name}
        </Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={tw`text-gray-500`}>
          {castData.asCharacter}
        </Text>
      </View>
    </View>
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
export default CastCard;
