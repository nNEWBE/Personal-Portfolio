"use client";

import ScrollToTop from "@/utils/ScrollToTop";
import { ThemeProvider } from "./themeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ScrollToTop />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
