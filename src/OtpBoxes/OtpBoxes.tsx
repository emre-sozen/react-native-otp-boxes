import { useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native"
import { styles } from "./styles/otp-boxes-style"

export const OtpBoxes = () => {
    const numberOfDigits = 6;
    const autoFocus = true;
    const secureTextEntry = false;

    const inputRef = useRef<TextInput>(null);

    const [code, setCode] = useState("");

    const handleBoxTextChange = (value: string) => {
        setCode(value);
    }

    const handlePress = () => {
        inputRef.current?.focus();
    };

    return (
        <View style={styles.container}>
            <View style={styles.boxesContainer}>
                {
                    Array(numberOfDigits)
                        .fill(0)
                        .map((_, index) => {
                            return (
                                <Pressable
                                    key={`${index}`}
                                    onPress={handlePress}
                                    style={[
                                        styles.boxContainer,
                                        index === code.length ? { borderColor: "#007AFF" } : {},
                                    ]}
                                >
                                    <Text style={[styles.boxText]}>
                                        {code[index]}
                                    </Text>
                                </Pressable>
                            )
                        })
                }
                <TextInput
                    value={code}
                    onChangeText={handleBoxTextChange}
                    maxLength={numberOfDigits}
                    inputMode="numeric"
                    ref={inputRef}
                    autoFocus={autoFocus}
                    style={styles.hiddenTextInput}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    )
}