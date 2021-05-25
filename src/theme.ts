import {extendTheme, theme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export default extendTheme({
  colors: {
    primary: theme.colors.teal,
    secondary: theme.colors.blue,
  },
  styles: {
    global: (props) => ({
      "html, body, #root": {
        color: mode(undefined, "whiteAlpha.900")(props),
        height: "100%",
        fontFamily: "'Bai Jamjuree', sans-serif",
      },
    }),
  },
  textStyles: {
    soft: {
      ".chakra-ui-light &": {
        color: ["blackAlpha.100", "blackAlpha.500"],
      },
      ".chakra-ui-dark &": {
        color: ["whiteAlpha.100", "whiteAlpha.500"],
      },
    },
  },
  fontSizes: {
    sm: "0.95rem",
    xs: "0.9rem",
  },
  sizes: {
    container: {
      xl: "1265px",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "'Bai Jamjuree', sans-serif",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 9999,
      },
      sizes: {
        md: {
          paddingY: 6,
          paddingX: 9,
          fontSize: "md",
        },
      },
      variants: {
        solid: (props) => ({
          backgroundColor: `${props.colorScheme}.500`,
          boxShadow: `0 0 10px ${(props.theme.colors[props.colorScheme as any] as any)[500]}`,
          color: mode(undefined, "white")(props),
          fontWeight: "bold",
          _hover: {
            backgroundColor: `${props.colorScheme}.600`,
          },
        }),
      },
    },
  },
});
