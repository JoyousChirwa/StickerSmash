import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  label: string;
  theme?: "primary"; // theme?: "primary" | "circle" | "iconbtn";  // My input
  onPress?: () => void;
  // iconName?: keyof typeof FontAwesome.glyphMap; // My input
};

export default function Button({ label, theme, onPress, }: Props) { // ({ label, theme, onPress, iconName}: Props) 
  if ( theme === "primary") {
    return (
      <View style={[
        styles.buttonContainer,
        { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18},
      ]}>
        <Pressable 
          style={[styles.button, {backgroundColor: "#fff",}]}
          onPress={onPress}
        >
          <FontAwesome name="picture-o" color="#25292e" size={18} style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    ); 
  }

  // My logic
  // else if ( theme === "circle" ) {
  //   return (
  //     <View 
  //       style={[
  //         styles.buttonContainer, {
  //           width:60, 
  //           height: 60, 
  //           borderWidth: 4, 
  //           borderRadius: 30, 
  //           borderColor: "#ffd33d",
  //           padding: 2,
  //         }
  //       ]
  //     }>
  //       <Pressable 
  //         style={[ 
  //           styles.button, { 
  //             backgroundColor: "#fff", 
  //             borderRadius: 30,
                
  //           }
  //         ]} 
  //         onPress={onPress}
  //       >
  //         <Text style={[
  //           styles.buttonLabel, {
  //             color: "#25292e", 
  //             fontWeight: 700,
  //             fontSize: 20, 
  //           }
  //         ]}>{label}</Text>
  //       </Pressable>
  //     </View>
  //   );
  // }

  // else if ( theme === "iconbtn") {
  //   return (
  //   <View style={[styles.buttonContainer, {width:80, height: 68}]}>
  //     <Pressable 
  //       style={[
  //         styles.button,{
  //           flexDirection: "column",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }
  //       ]} 
  //       onPress={onPress}
  //     >
  //       <FontAwesome name={iconName} size={18} color="#fff" style={[styles.buttonIcon, {paddingRight: 0,}]} />
  //       <Text style={styles.buttonLabel}>{label}</Text>
  //     </Pressable>
  //   </View>
  //   )
  // }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});