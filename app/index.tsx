import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useStore } from "../store/useStore";
import { useRouter } from "expo-router";
import "react-native-reanimated";

export default function Index() {

  const setHasSeenIntro = useStore((state:any) => state.setHasSeenIntro);
  const router = useRouter();

  return (
    
      <View className="flex-1 justify-center items-center w-full bg-green-200 gap-5 p-4">
        <TouchableOpacity  onPress={() => {
          setHasSeenIntro();
          router.push("/(auth)/login");
        }} >
          <Text className="text-xl">Login</Text>
        </TouchableOpacity>

      <TouchableOpacity   onPress={() => {
          setHasSeenIntro();
          router.push("/(auth)/register");
        }}>
          <Text className="text-xl ">Register</Text>
      </TouchableOpacity>
      </View>
  );
 // return <Redirect href="/(tabs)/home" />
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});