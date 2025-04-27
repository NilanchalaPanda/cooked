import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "@/services/GlobalAPI";
import { FlatList } from "react-native-gesture-handler";

export default function CategoryList() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    categories();
  }, []);

  const categories = async () => {
    const result = await GlobalAPI.GetCategoriesList();
    setCategoriesList(result?.data);
    console.log(result.data);
  };

  return (
    <View>
      <Text style={styles.headingText}>CategoryList</Text>

      <FlatList
        data={categoriesList}
        renderItem={({ item, index }) => <View></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontFamily: "mBold",
    marginTop: 10,
  },
});
