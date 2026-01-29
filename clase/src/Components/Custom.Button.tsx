import { View, Text, TouchableOpacity } from "react-native"

interface CustomButtonProps {
    title: string;
    onClick?: () => void;
}

export default function CustomButton({
    title, onClick     
}: CustomButtonProps) {
    return (
        <TouchableOpacity 
        onPress={onClick}>
            <View style={{ backgroundColor: 'brown', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
