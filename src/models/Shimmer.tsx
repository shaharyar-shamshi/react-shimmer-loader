/**
 * Props for the Shimmer component.
 * @typedef {Object} ShimmerProps
 * @property {number} width - Width of the shimmer effect.
 * @property {number} height - Height of the shimmer effect.
 * @property {React.ReactNode} children - Content to be displayed within the shimmer effect.
 * @property {string} [backgroundColor] - Optional background color for the shimmer effect.
 * @property {string} [highlightColor] - Optional highlight color for the shimmer effect.
 * @property {number} [animationDuration] - Optional duration of the shimmer animation in milliseconds.
 * @property {string} [borderRadius] - Optional border radius for the shimmer effect.
 */

export interface ShimmerProps {
  width: number;
  height: number;
  backgroundColor?: string;
  highlightColor?: string;
  animationDuration?: number;
  borderRadius?: string;
}
