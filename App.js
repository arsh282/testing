
import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#a9e3e9" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Resume</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.profileSection}>
          <FontAwesome name="user-circle" size={100} color="#ddd" />
          <Text style={styles.profileName}>Arshleen Kaur</Text>
          <Text style={styles.profileInfo}>Student</Text>
        </View>
        <View style={styles.section}>
          <MaterialIcons name="school" size={30} color="#4A90E2" />
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Study</Text>
            <Text style={styles.sectionDetails}>
              At Winnipeg University
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <MaterialIcons name="stars" size={30} color="#4A90E2" />
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Experience :</Text>
            <Text style={styles.sectionDetails}>Web Developer</Text>
          </View>
        </View>

        <View style={styles.section}>
          <FontAwesome name="graduation-cap" size={30} color="#4A90E2" />
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.sectionDetails}>
              Bachelor's of Computer Applications
            </Text>
            <Text style={styles.sectionDetails}>Mobile Applications Development</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Ionicons name="settings" size={30} color="#4A90E2" />
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.sectionDetails}>
              communication {"\n"}Front End Developer
            </Text>

          </View>
        </View>
        <View style={styles.section}>
          <Ionicons name="phone" size={30} color="#4A90E2" />
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <Text style={styles.sectionDetails}>
              
          +1(668)-5241
            </Text>

          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4A90E2",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F8FA",
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  profileInfo: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  sectionContent: {
    flex: 1, // Ensures text wraps properly
    marginLeft: 15, // Space between the icon and text
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  sectionDetails: {
    fontSize: 16,
    color: "#555",
    marginTop: 2,
  },
});

