import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quang Dũng Phạm | Data Analyst",
  description: "Portfolio của Data Analyst với 1 năm kinh nghiệm, chuyên Power BI, SQL và phân tích dữ liệu kinh doanh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
