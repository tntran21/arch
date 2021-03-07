import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, gsap, ScrollTrigger } from 'gsap/all';

if (typeof window !== "undefined") {
  gsap.registerPlugin(CSSRulePlugin, TimelineLite);
}
