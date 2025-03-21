export type ProductReviewCardProps = {
  rating: number;
  userName: string;
  image?: string;
  likeCount: number;
  deslikeCount: number;
  review: string;
  date: string;
  onLikePress: () => void;
  onDislikePress: () => void;
  onImagePress: () => void;
  recommends: boolean;
};
