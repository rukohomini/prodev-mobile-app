import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/_joinstyle";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
