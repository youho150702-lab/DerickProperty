import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface Props {
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline-light";
  size?: "md" | "lg";
  className?: string;
  fullWidth?: boolean;
}

const variants = {
  solid: "bg-emerald-600 text-white hover:bg-emerald-700",
  "outline-light": "border border-emerald-600 text-emerald-700 hover:bg-emerald-50",
};

export function WhatsAppButton({ message, children, variant = "solid", size = "md", className = "", fullWidth }: Props) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors ${
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"
      } ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}
