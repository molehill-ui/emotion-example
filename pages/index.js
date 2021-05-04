import { Component } from "../components/Component";

export default function Home() {
  return (
    <div>
      <div
        css={{
          display: "flex",

          mx: false ? "1" : 2,
          p: "3",
          px: 4,

          border: "1px solid --color-blue-100",
          color: "white",
          bg: "blue-500",
          borderRadius: "md",
          boxShadow: "lg",
          fontWeight: "bold",
          "@media:sm": {
            background: "blue-500",
          },
          md: {
            backgroundImage:
              "linear-gradient(to right, --color-blue-400, --color-indigo-800)",
          },
          "@media:xl": {
            backgroundImage:
              "linear-gradient(to right, --color-red-400, --color-indigo-800)",
          },
        }}
      >
        emotion time
      </div>
      <div style={{ color: "blue-500" }}>style only</div>
      <Component />
    </div>
  );
}
