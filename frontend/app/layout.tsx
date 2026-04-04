import type { Metadata } from "next";
import "./globals.css";
import Modal from "./components/Modal";
import Light from "./components/Light";
import SessionProv from "./components/SessionProvider";
import ProfileBtn from "./components/ProfileBtn";
import Logo from "./components/Logo";
import PageWrapper from "./components/PageWrapper";

export const metadata: Metadata = {
  title: "Квест по кибербезопасности",
  description: "Начните ваше приключение в мир кибербезопасности для повышения навыков цифровой грамотности",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        <SessionProv>
          <Light />
          <Modal />
          <header className="p-1 flex items-center h-[10dvh] justify-between">
            <Logo />
            <div className="flex gap-2 items-center">
              <h1 className="p-1 border rounded">Кибербезопасный квест</h1>
              <ProfileBtn />
            </div>
          </header>
          <PageWrapper>
            {children}
          </PageWrapper>
        </SessionProv>
      </body>
    </html>
  );
}
