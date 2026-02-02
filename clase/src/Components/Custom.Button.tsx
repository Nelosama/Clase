import { View, Text, TouchableOpacity } from "react-native"

interface CustomButtonProps {
    title: string;
    onClick?: () => void;
    backgroundColor?: string;
    textColor?: string;
}

export default function CustomButton({
    title, 
    onClick,
    backgroundColor = '#8B4513',
    textColor = '#FFFFFF'
}: CustomButtonProps) {
    return (
        <TouchableOpacity 
        onPress={onClick}>
            <View style={{ backgroundColor: backgroundColor, padding: 15, borderRadius: 8 }}>
                <Text style={{ color: textColor, fontSize: 16, fontWeight: '600' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
