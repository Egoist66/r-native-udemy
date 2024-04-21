import { ReactNode, useCallback } from "react";
import {
  Linking,
  Alert,
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

type OpenURLButtonProps = {
  url: string;
  type?: "pressable" | "touchable" | "highlight";
  textColor?: string;
  textCenter?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const LinkButton = ({
  url,
  children,
  type = "pressable",
  textCenter = false,
  textColor = "#fff",
  style,
}: OpenURLButtonProps) => {
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

  if (type === "pressable") {
    return (
      <Pressable onPress={handlePress} style={style}>
        <Text
          style={[
            { textAlign: textCenter ? "center" : "left", color: textColor },
            style,
          ]}
        >
          {children}
        </Text>
      </Pressable>
    );
  } else if (type === "touchable") {
    return (
      <TouchableOpacity onPress={handlePress} style={style}>
        <Text
          style={[
            { textAlign: textCenter ? "center" : "left", color: textColor },
            style,
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  } else if (type === "highlight") {
    return (
      <TouchableHighlight style={style} onPress={handlePress}>
        <Text
          style={{
            color: textColor,
            textAlign: textCenter ? "center" : "left",
          }}
        >
          {children}
        </Text>
      </TouchableHighlight>
    );
  }
};
