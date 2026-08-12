import { StyleSheet, Text, View } from "react-native";

type Props = {
  icon: string;
  value: string;
  label: string;
};

export default function WeatherInfoCard({
  icon,
  value,
  label,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 105,
    height: 105,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 24,
  },

  value: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },

  label: {
    color: "#d9d9d9",
    fontSize: 14,
    marginTop: 5,
  },
});