import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: "%s | DegroCraft Wiki",
    default: "DegroCraft Wiki — База знаний сервера",
  },
  description: "Официальная вики-страница Minecraft сервера DegroCraft.",
  keywords: [
    "DegroCraft",
    "Minecraft сервер",
    "Вики",
    "База знаний",
    "Майнкрафт правила",
  ],
  icons: {
    icon: "/favicon.ico", // убедись, что иконка лежит в папке public
  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();

  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img src="/favicon.ico" width="24" height="24" />{" "}
                  <b>DEGROCRAFT WIKI</b>
                </div>
              }
            />
          }
          footer={<Footer>2026 © DegroCraft</Footer>}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
