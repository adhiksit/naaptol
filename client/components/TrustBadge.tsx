import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TrustBadge({
  icon: Icon,
  title,
  description,
}: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground text-lg">{title}</h3>
      <p className="text-muted-foreground text-sm mt-2">{description}</p>
    </div>
  );
}
