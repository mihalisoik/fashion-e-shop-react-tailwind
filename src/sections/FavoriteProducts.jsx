import FavoriteProductCard from "../components/FavoriteProductCard";
import { clothes } from "../constants/clothes";

const clothe = clothes[0];

function FavoriteProducts() {
  return (
    <div className="bg-gray-200/90">
      <FavoriteProductCard
        id={clothe.id}
        image={clothe.image}
        name={clothe.name}
        priceCents={clothe.priceCents}
      />
    </div>
  );
}

export default FavoriteProducts;
