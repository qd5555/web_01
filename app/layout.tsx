import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pham Quang Dung — Business Intelligence Executive",
  description:
    "Portfolio of Pham Quang Dung — BI Executive specializing in Power BI, SQL Server, ETL pipelines and automated reporting in FMCG manufacturing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Aptos là font độc quyền của Microsoft, không có trên Google Fonts.
          CSS font-stack bên dưới sẽ dùng Aptos nếu máy/trình duyệt có cài sẵn
          (Windows 11 + Office 2024 trở lên), fallback sang Nunito nếu không có.
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
