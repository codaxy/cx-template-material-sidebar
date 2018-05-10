import {Store} from "cx/data";
import {Url, History, startHotAppLoop} from "cx/ui";
import {Timing, Debug} from "cx/util";

//css
import "cx-theme-material/dist/reset.css";
import "cx-theme-material/dist/widgets.css";
import "cx-theme-material/dist/svg.css";
import "cx-theme-material/dist/charts.css";
import "./index.scss";
import {enableMaterialLabelPlacement} from "cx-theme-material";

enableMaterialLabelPlacement();

//store
const store = new Store();

//routing
//Url.setBaseFromScript("app*.js");
History.connect(store, "url");

//debug
Timing.enable("app-loop");
Debug.enable("app-data");

//app loop
import Routes from "./routes";

startHotAppLoop(module, document.getElementById("app"), store, Routes);
