import { View, Text, Button } from "react-native";
import Swiper from "react-native-swiper";
import { useStore } from "../store/useStore";
import { useRouter } from "expo-router";
export default function Index() {

  const setHasSeenIntro = useStore((state:any) => state.setHasSeenIntro);
  const router = useRouter();

  return (
    <Swiper loop={false} showsPagination={true}>
      <View className="flex-1 justify-center items-center bg-blue-200">
        <Text className="text-2xl">Welcome to the App!</Text>
      </View>
      <View className="flex-1 justify-center items-center bg-green-200">
        <Button title="Get Started" onPress={() => {
          setHasSeenIntro();
          router.replace("/(auth)/login");
        }} />
      </View>
    </Swiper>
  );
 // return <Redirect href="/(tabs)/home" />
}
