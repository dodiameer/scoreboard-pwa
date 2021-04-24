import App from "./App.svelte";
import "$assets/global.css";
// @ts-ignore
import { registerSW } from "virtual:pwa-register";

const app = new App({
  target: document.getElementById("app"),
});
registerSW();

export default app;
