import { ReactNode, useCallback } from "react";
import { Linking, Alert, Text, StyleProp, ViewStyle, Pressable } from "react-native";
import { styles } from '../../styles/global';

type OpenURLButtonProps = {
  url: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const LinkButton = ({ url, children, textColor = '#fff', style }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable style={style}  onPress={handlePress}>
      <Text style={{ color: textColor }}>{children}</Text>
    </Pressable>
  )
};
