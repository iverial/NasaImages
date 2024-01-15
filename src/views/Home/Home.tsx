import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import data from "../../helpers/fetchApiNasa"
import TodayImage from "../../components/TodayImage";
import { PostImage } from "../../types/index";
import { format, sub } from "date-fns";
import LastFiveDaysImage from "../../components/LastFiveDaysImage";

const Home = () => {
  const [dataTodayInfo, setDataTodayInfo] = useState<PostImage>({});
  const [lastFiveDays, setlastFiveDays] = useState<PostImage[]>([]);

  const loadTodayImage = async () => {
    const todayImage = await data();
    setDataTodayInfo(todayImage);
  };
  const loadlastFiveDays = async () => {
    const now = new Date();
    const date = format(now, "yyyy-MM-dd");
    const FiveLastAgoDate = format(sub(now, { days: 31 }), "yyyy-MM-dd");

    const lastFiveDays = await data(
      `&start_date=${FiveLastAgoDate}&end_date=${date}`
    );
    setlastFiveDays(lastFiveDays);
  };

  useEffect(() => {
    loadlastFiveDays();
    loadTodayImage();
  }, []);

  return (
    <View style={style.container}>
      <Header />
      <TodayImage {...dataTodayInfo} />
      <LastFiveDaysImage PostImages={lastFiveDays} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "rgba(7,26,93,255)",
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Home;
