import { View, Text, TextInput, Button } from "react-native";
import { useStore } from "../../store/useStore";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export default function login() {
 // const setAuthenticated = useStore((state:any) => state.setAuthenticated);
 const {login}=useAuth();
  const router = useRouter();

  const handleLogin = () => {
    //setAuthenticated(true);
    login();
    router.replace("/(tabs)/home");
  };

  return (
   
     <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-xl">Login</Text>
      <TextInput className="border p-2 w-full my-2" style={{borderRadius: 10 }} placeholder="Email" />
      <TextInput className="border p-2 w-full my-2" style={{borderRadius: 10 }} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin}  />
    </View>
  )
}