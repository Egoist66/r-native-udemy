import { FC } from "react";
import { View, TouchableOpacity, Text } from "react-native";

type ErrorMessageProps = {
  onTryHandler?: () => void;
  errorText: string;
};


export const ErrorMessage: FC<ErrorMessageProps> = ({errorText, onTryHandler}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{textAlign: 'center', marginBottom: 10}}>
        {errorText}
      </Text>
      <TouchableOpacity 
        style={{ marginTop: 10, 
                  backgroundColor: '#3A5F9E', 
                  padding: 10, 
                  borderRadius: 5 
                }} 
        onPress={onTryHandler}>
        <Text style={{color: 'white', textAlign: 'center'}}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
};

