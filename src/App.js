import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavbarComp from "./Pages/Navbar";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "linear-gradient(45deg, #ffffff, #f8f8f8)", // Example gradient colors
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: `rgba(1, 0, 10, 0.8)`, // Example background color
    },
  },
});

const AppComponent = ({ children }) => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <div
          style={{
            backgroundColor: darkTheme.theme?.colors?.background || "none",
            height: "100vh",
            backdropFilter: "blur(10px)", // Apply backdrop filter for the glass effect
          }}
        >
          <NavbarComp />
        </div>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default AppComponent;
