import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  itemCount: number;
  bgColor?: string;
}

export default function CategoryCard({
  id,
  name,
  image,
  itemCount,
  bgColor = "bg-blue-50",
}: CategoryCardProps) {
  return (
    <Link to={`/shop?category=${id}`}>
      <div
        className={`${bgColor} rounded-xl overflow-hidden group cursor-pointer h-64 md:h-72 relative`}
      >
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-colors"></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
          <p className="text-sm text-white/80 mt-1">{itemCount} items</p>
          <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-semibold">Explore</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
