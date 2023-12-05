"use strict";

// import { initSpoiler, initDdropdown } from './modules/spoilers.js';
// import { initTabs } from './modules/tabs.js';
// import { initHeader } from './modules/header.js';
// import { initModals, openModalIf } from './modules/modals.js';


import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import "./modules/sliders.js";
import "./modules/feedback-form.js";
import "./modules/header.js";

function app() {
  useDynamicAdapt("max");
}

document.addEventListener("DOMContentLoaded", app);
