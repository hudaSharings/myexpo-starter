import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useStore from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";


export default function TabsLayout() {

//const setAuthenticated = useStore((state:any) => state.setAuthenticated);
const {logout}=useAuth();
const router = useRouter();
const handleLogout = () => {
    //setAuthenticated(false);  
    logout();
    router.replace("../(auth)/login");
}
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                headerTitleAlign: "center",
                headerRight(props) {
                  return  <Ionicons name="log-out-outline" onPress={handleLogout} size={24} className="mr-4" color="black" />
                },                
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",                   
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={24} color={color} />
                    ),
                }}                
            />            
        </Tabs>                         
    );
}