function FavoriteProductCard({ id, image, name, priceCents }) {
  return (
    <div className="flex">
      <img src={image} alt="Favorite Product" width={110} />
    </div>
  );
}

export default FavoriteProductCard;
