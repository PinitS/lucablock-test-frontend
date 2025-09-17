import { v4 as uuid } from "uuid";

export interface Product {
  id: string;
  name: string;
  imgPath: string;
}

export async function getProducts(): Promise<Product[]> {
  const result: Product[] = new Array(4).fill(null).map((item, index) => {
    return {
      id: uuid(),
      name: `Straight Tuck End (${index + 1})`,
      imgPath: `/images/MOCK_BOX_${index + 1}.png`,
    };
  });
  return result;
}
