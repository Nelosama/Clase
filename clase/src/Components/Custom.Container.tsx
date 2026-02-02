import { View, ViewProps } from "react-native"

interface CustomContainerProps extends ViewProps {
    children: React.ReactNode;
}

export default function CustomContainer({
    children,
    style,
    ...props
}: CustomContainerProps) {
    return (
        <View 
            style={[
                { 
                    backgroundColor: '#00AA00', 
                    padding: 20, 
                    borderRadius: 10,
                    width: '100%'
                },
                style
            ]}
            {...props}
        >
            {children}
        </View>
    )
}
