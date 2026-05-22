export interface EditableElement {
  id: string;
  label: string;
  type: "text" | "file";
  xAxis: number;
  yAxis: number;
  size: number;
}

export interface ArtworkDesign {
  backgroundUrl: string;
  elements: EditableElement[];
}

export interface Artwork {
  id: number;
  title: string;
  product: string;
  sku: string;
  description: string;
  views: number;
  wishlist: number;
  design: ArtworkDesign;
}
