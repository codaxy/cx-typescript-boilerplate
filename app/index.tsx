import { Store } from 'cx/data';
import { Url, History, Widget, startAppLoop } from 'cx/ui';
import { Timing, Debug } from 'cx/util';
//css
import "./index.scss";

import {enableMaterialLabelPlacement, enableMaterialHelpPlacement} from "cx-theme-material";

enableMaterialHelpPlacement();
enableMaterialLabelPlacement();

//store
const store = new Store();

declare let module: { hot: any };

//webpack (HMR)
if (module.hot) {
   // accept itself
   module.hot.accept();

   // remember data on dispose
   module.hot.dispose(function (data) {
      data.state = store.getData();
      if (stop)
         stop();
   });

   //apply data on hot replace
   if (module.hot.data)
      store.load(module.hot.data.state);
}

//routing

Url.setBaseFromScript('app.js');
History.connect(store, 'url');

//debug

Widget.resetCounter();
Timing.enable('app-loop');
Debug.enable('app-data');

//app loop
import Routes from './routes';

console.log(Routes);

let stop = startAppLoop(document.getElementById('app'), store, Routes);
