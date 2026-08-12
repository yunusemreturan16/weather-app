import { StyleSheet, Text, View } from "react-native";

type Props = {
  city: string;
  country: string;
  temperature: number;
  description: string;
  feelsLike: number;
};

export default function WeatherMain({
  city,
  country,
  temperature,
  description,
  feelsLike,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>

      <Text style={styles.country}>{country}</Text>

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.temperature}>
        {Math.round(temperature)}°
      </Text>

      <View style={styles.feelsContainer}>
        <Text style={styles.feelsLabel}>Hissedilen</Text>

        <Text style={styles.feelsTemp}>
          {Math.round(feelsLike)}°C
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  city: {
    color: "white",
    fontSize: 42,
    fontWeight: "300",
  },

  country: {
    color: "#d9d9d9",
    fontSize: 16,
    marginTop: 5,
  },

  description: {
    color: "#8cc8ff",
    fontSize: 18,
    marginTop: 10,
    textTransform: "capitalize",
  },

  temperature: {
    color: "#9BC9FF",
    fontSize: 96,
    fontWeight: "bold",
    marginTop: 25,
  },

  feelsContainer: {
    marginTop: 10,
  },

  feelsLabel: {
    color: "#d9d9d9",
    fontSize: 16,
  },

  feelsTemp: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});