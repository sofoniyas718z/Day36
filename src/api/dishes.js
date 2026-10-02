import { dishes } from "../data";

export async function getDishes() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return dishes;
}