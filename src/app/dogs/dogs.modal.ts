export interface DogAttributes {
  name: string;
  description: string;
  life: {
    max: number;
    min: number;
  };
  male_weight: {
    max: number;
    min: number;
  };
  female_weight: {
    max: number;
    min: number;
  };
  hypoallergenic: boolean;
}

export interface Dog {
  id: string;
  type: string;
  attributes: DogAttributes;
  relationships: {
    group: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}
