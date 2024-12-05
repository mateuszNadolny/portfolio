import { TechItem } from "@/constants/types";
import Link from "next/link";

interface TechCardProps {
  tech: TechItem;
}

const TechCard: React.FC<TechCardProps> = ({ tech }) => {
  return (
    <Link
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-gradient-to-br from-secondary to-gray-900 border rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group">
        <div className="flex md:flex-col items-center gap-3">
          <div className="text-2xl text-white">{tech.icon}</div>
          <div>
            <h4 className="font-semibold text-white group-hover:text-gray-200 transition-colors">
              {tech.name}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TechCard;
