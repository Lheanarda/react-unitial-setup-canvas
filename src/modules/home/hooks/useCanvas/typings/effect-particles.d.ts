import Particle from "../classes/Particle";
import { CanvasEl } from "./canvas";

export interface SizeEffect {
  width: number;
  height: number;
}

export interface EffectParticlesProps {
  canvasEl: CanvasEl;
  size: SizeEffect;
}
