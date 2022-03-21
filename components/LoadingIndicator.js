import { Image, View } from "react-native";
import tw from "tailwind-react-native-classnames";

function LoadingIndicator() {
  return (
    <View style={tw`w-full flex justify-center items-center`}>
      <View style={tw`w-10 h-10 justify-center`}>
        <Image
          style={tw`w-full h-full`}
          source={require("../assets/yellowloader.gif")}
        />
      </View>
    </View>
  );
}

export default LoadingIndicator;
