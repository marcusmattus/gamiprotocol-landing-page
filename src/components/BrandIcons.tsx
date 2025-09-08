import { Star, Trophy, Flame, Rocket } from 'lucide-react';

const BullIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-8 w-8 text-[#7C5CFF]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M8 10 C5 8 5 5 8 5" />
    <path d="M16 10 C19 8 19 5 16 5" />
  </svg>
);

const BearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-8 w-8 text-[#7C5CFF]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="13" r="4" />
    <circle cx="9" cy="9" r="2" />
    <circle cx="15" cy="9" r="2" />
  </svg>
);

const iconComponents = [Star, Trophy, BullIcon, Flame, Rocket, BearIcon];

export function BrandIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pt-8">
      {iconComponents.map((Icon, idx) => (
        <div
          key={idx}
          className="h-16 w-16 rounded-full border-4 border-[#7C5CFF] bg-white flex items-center justify-center"
        >
          <Icon className="h-8 w-8 text-[#7C5CFF]" />
        </div>
      ))}
    </div>
  );
}
