import { colors } from "./config";

export const getRandomNumber = (min, max) => {
   return (Math.random() * max) + min;
}

export const getRandomColor = () => {
   return colors[Math.floor(Math.random() * colors.length)];
}