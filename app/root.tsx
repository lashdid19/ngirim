import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./styles/app.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ngirim",
  viewport: "width=device-width,initial-scale=1",
  description: "File transfer with 6-digit key sharing system"
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-800">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
