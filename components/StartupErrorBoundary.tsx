// File: components/StartupErrorBoundary.tsx
import React from "react";
import { Text, View } from "react-native";
import { theme } from "../constants/theme";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  message: string;
};

export default class StartupErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    message: ""
  };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : "Unknown startup error"
    };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error("StartupErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            backgroundColor: theme.colors.background
          }}
        >
          <Text
            style={{
              color: theme.colors.gold,
              fontFamily: "CinzelBold",
              fontSize: 22,
              marginBottom: 12,
              textAlign: "center"
            }}
          >
            Startup Error
          </Text>

          <Text
            style={{
              color: theme.colors.text,
              fontFamily: "MontserratMedium",
              fontSize: 15,
              lineHeight: 24,
              textAlign: "center"
            }}
          >
            The app hit an error while starting.
          </Text>

          {!!this.state.message && (
            <Text
              style={{
                marginTop: 12,
                color: theme.colors.muted,
                fontFamily: "MontserratMedium",
                fontSize: 13,
                lineHeight: 20,
                textAlign: "center"
              }}
            >
              {this.state.message}
            </Text>
          )}
        </View>
      );
    }

    return this.props.children;
  }
}