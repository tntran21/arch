import { gsap } from "gsap/dist/gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, ScrollTrigger } from 'gsap/all';

if (typeof window !== "undefined") {
  gsap.registerPlugin(CSSRulePlugin, TimelineLite);
}
