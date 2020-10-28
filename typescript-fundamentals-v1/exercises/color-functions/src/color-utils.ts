// npm test exercises/color-functions/tests/color-functions.test.ts

//TODO: Implement hexToRgb
export const hexToRgb = (hex: string): {r: number, g: number, b: number} => {
  const r: number = parseInt(hex.length === 3 ? hex.slice(0,1) + hex.slice(0,1) : hex.slice(0,2), 16)
  const g: number = parseInt(hex.length === 3 ? hex.slice(1,2) + hex.slice(1,2) : hex.slice(2,4), 16)
  const b: number = parseInt(hex.length === 3 ? hex.slice(2,3) + hex.slice(2,3) : hex.slice(4,6), 16)
  return {r, g, b}
}

//TODO: Implement rgbToHex
export const rgbToHex = (r: number, g: number, b: number): string => {
  const rHex: string = padZero(trimRGB(r).toString(16))
  const gHex: string = padZero(trimRGB(g).toString(16))
  const bHex: string = padZero(trimRGB(b).toString(16))
  return rHex + gHex + bHex
}

const padZero = (hex: string): string => {
  return hex.length === 1 ? '0' + hex : hex;
}

const trimRGB = (num: number): number => {
  if (num > 255) return 255
  if (num < 0) return 0
  return num
}