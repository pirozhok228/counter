import "./globals.css";

export const metadata = {
  title: "Счётчик",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
