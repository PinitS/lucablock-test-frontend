export interface ProductSizeInterface {
  w: number;
  l: number;
  h: number;
}

export interface QuantityInterface {
  value: number;
  unitPrice: number;
  totalPrice: number;
}

export interface ProofInterface {
  value: string;
  price: number;
}

export interface DeliveryInterface {
  method: string;
  postcode: string | null;
}

export interface ProductionTimeInterface {
  finishDate: string;
  price: number;
}

export interface SpecialTechniqueInterface {
  id: string;
  name: string;
  coverage?: number;
  price: number;
}

export interface ProductAttributeInterface {
  productId: string;
  productName: string;
  productImgPath: string;
  size: ProductSizeInterface;
  material: string;
  coating: string;
  specialTechnique: null | SpecialTechniqueInterface[];
  quantity: QuantityInterface;
  proof: ProofInterface;
  delivery: DeliveryInterface;
  summaryPrice: number;
  productionTime: ProductionTimeInterface;
}
