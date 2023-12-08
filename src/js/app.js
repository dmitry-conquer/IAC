"use strict";

import AOS from "aos";
import { CountUp } from "../../node_modules/countup.js/dist/countUp.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import "./modules/sliders.js";
import "./modules/feedback-form.js";
import "./modules/map.js";
import "./modules/header.js";
import "./modules/focus-videos.js";

function app() {
  useDynamicAdapt("max");
  AOS.init({
    once: true,
  });

  const countsToAnimate = document.querySelectorAll(".target-count");
  countsToAnimate.forEach(target => {
    new CountUp(target.id, target.textContent, {
      enableScrollSpy: true,
      scrollSpyOnce: true,
      duration: 2.5,
    });
  });
}

document.addEventListener("DOMContentLoaded", app);
