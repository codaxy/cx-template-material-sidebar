import { Store } from "cx/data";
import { History, startHotAppLoop } from "cx/ui";
import { Timing, Debug } from "cx/util";

// css
import "cx-theme-material/dist/reset.css";
import "cx-theme-material/dist/widgets.css";
import "./index.scss";
import {
  enableMaterialLabelPlacement,
  enableMaterialHelpPlacement,
} from "cx-theme-material";

enableMaterialLabelPlacement();
enableMaterialHelpPlacement();

// store
const store = new Store();

// routing
History.connect(store, "url");

// debug
Timing.enable("app-loop");
Debug.enable("app-data");

// app loop
import App from "./routes";

startHotAppLoop(
  { hot: import.meta.hot },
  document.getElementById("app")!,
  store,
  App,
);

// this is required even though startHotAppLoop calls it too
if (import.meta.hot) import.meta.hot.accept();
