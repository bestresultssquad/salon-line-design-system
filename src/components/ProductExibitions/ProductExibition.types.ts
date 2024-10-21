export type ProductExibitionOnPressCallback = {
  id: number;
  type: 'Images' | '3dView' | 'Video';
};

export interface ProductExibitionProps {
  onPress: (callback: ProductExibitionOnPressCallback) => void;
}
