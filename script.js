import navbar from "./components/navbar.js";
// import hero from "./components/hero.js";

// const parent = reactDOM.createRoot("header", null, [navbar(), hero()]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar());