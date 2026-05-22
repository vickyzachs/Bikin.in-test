/*
  Editable element di dalam design
*/
export interface EditableElement {
  id: string;
  label: string;
  type: string;
  xAxis: number;
  yAxis: number;
  size: number;
  image: string;
  value: string;
  animation: string;
}

/*
  Artwork utama
*/
export interface Artwork {
  id: number;
  title: string;
  product: string;
  sku: string;
  description: string;

  views: number;
  wishlist: number;
  shows: number;

  skala: string;
  orientasi: string;
  shape: string;
  dimension: string;

  design: {
    sheets: {
      id: string;

      sides: {
        front: {
          background: string;
          images: string[];

          elements: EditableElement[];
        };
      };
    }[];
  };
}
