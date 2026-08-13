import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({
  city,
  setCity,
  onSearch,
}: Props) {

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Şehir ara..."
        placeholderTextColor="#ccc"
        style={styles.input}
        value={city}
        onChangeText={setCity}
        onSubmitEditing={onSearch}
        returnKeyType="search"
      />


      <TouchableOpacity
        style={styles.button}
        onPress={onSearch}
        activeOpacity={0.7}
      >

        <Text style={styles.buttonText}>
          ARA  🔍
        </Text>

      </TouchableOpacity>


    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    width: "90%",
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },


  input: {
    flex: 1,
    height: 55,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "white",
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 16,
  },


  button: {
    marginLeft: 10,
    width: 60,
    height: 55,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },


  buttonText: {
    fontSize: 25,
  },

});