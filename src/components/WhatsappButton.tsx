import { buildWhatsappUrl } from "@/config/site";

interface WhatsappButtonProps {
  label?: string;
  customMessage?: string;
  variant?: "gold" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsappIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export function WhatsappButton({
  label = "Agendar pelo WhatsApp",
  customMessage,
  variant = "gold",
  size = "md",
  className = "",
}: WhatsappButtonProps) {
  const href = buildWhatsappUrl(customMessage);

  const variantClasses: Record<
    NonNullable<WhatsappButtonProps["variant"]>,
    string
  > = {
    gold: "btn-liquid-gold",
    glass: "btn-obsidian-glass",
  };

  const sizeClasses: Record<NonNullable<WhatsappButtonProps["size"]>, string> = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-5 py-3 text-sm sm:text-base gap-2.5",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 text-center sm:whitespace-nowrap ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <WhatsappIcon className="h-4 w-4 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
