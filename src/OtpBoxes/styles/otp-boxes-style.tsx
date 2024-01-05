import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    hiddenTextInput: {
        width: 1,
        height: 1,
        opacity: 0,
    },
    boxesContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
    },
    boxContainer: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#000000",
        height: 60,
        width: 44,
        justifyContent: "center",
        alignItems: "center",
    },
    boxText: {
        fontSize: 28,
    },
})