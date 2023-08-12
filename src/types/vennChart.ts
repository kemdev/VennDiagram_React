interface setsProps {
  sets: string[];
  size: number;
}


interface VennProps {
  sets: setsProps[];
  svgHeight?: number;
  svgWidth?: number;

  // default props that no need to specify like .length and other js props
  [key: string]: any;
}

export type {
  VennProps,
  setsProps,
}