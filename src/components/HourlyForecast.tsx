import { FlatList, StyleSheet, Text, View } from "react-native";

type ForecastItem = {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
};

type Props = {
  data: ForecastItem[];
};

export default function HourlyForecast({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saatlik Tahmin</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.dt_txt}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.time}>
              {item.dt_txt.substring(11, 16)}
            </Text>

            <Text style={styles.temp}>
              {Math.round(item.main.temp)}°
            </Text>

            <Text style={styles.desc}>
              {item.weather[0].description}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 25,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 15,
  },

  card: {
    width: 95,
    marginHorizontal: 8,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
  },

  time: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  temp: {
    color: "#fff",
    fontSize: 24,
    marginVertical: 8,
  },

  desc: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});