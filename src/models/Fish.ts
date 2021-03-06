export type Fish = {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  available: boolean;
};

export class FishFactory {
  static create = () => ({
    id: '',
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    available: true,
  })
}
