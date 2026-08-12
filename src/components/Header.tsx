import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  const today = new Date();

  const date = today.toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HAVA DURUMU</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    color: "white",
    fontSize: 14,
    letterSpacing: 3,
    fontWeight: "600",
  },

  date: {
    color: "#ddd",
    fontSize: 16,
    marginTop: 8,
  },
});