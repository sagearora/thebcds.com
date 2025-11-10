import Link from 'next/link';

interface LogoProps {
  variant?: 'header' | 'full';
  className?: string;
  textColor?: string;
}

export default function Logo({ variant = 'header', className = '', textColor }: LogoProps) {
  const textColorClass = textColor || 'text-[var(--c-ink)]';
  
  if (variant === 'header') {
    return (
      <Link href="/" className={`flex items-center ${className}`}>
        <div className="flex flex-col">
          <span className={`text-[10px] font-bold ${textColorClass} leading-tight tracking-wide`}>
            BRANT COUNTY
          </span>
          <div className="flex items-baseline gap-1.5 -mb-0.5">
            <span className={`text-lg font-black ${textColorClass} leading-none`} style={{ fontFamily: 'var(--font-display)' }}>
              DENTAL
            </span>
            {/* Blue Wave/Swoosh Graphic */}
            <svg
              width="32"
              height="16"
              viewBox="0 0 100 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M0 15 Q25 3, 50 10 T100 8"
                stroke="var(--c-blue)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <span className={`text-[10px] font-bold ${textColorClass} leading-tight tracking-wide`}>
            SOCIETY
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`flex flex-col ${className}`}>
      <div className="flex flex-col">
        <span className={`text-base font-bold ${textColorClass} mb-2`}>
          BRANT COUNTY
        </span>
        <div className="relative flex items-baseline">
          <span className={`text-5xl md:text-7xl font-black ${textColorClass} leading-none`} style={{ fontFamily: 'var(--font-display)' }}>
            DENTAL
          </span>
          {/* Blue Wave/Swoosh Graphic - positioned to overlap with SOCIETY */}
          <div className="relative ml-3">
            <svg
              width="140"
              height="70"
              viewBox="0 0 200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-2 left-0"
            >
              <path
                d="M0 40 Q50 10, 100 30 T200 25"
                stroke="var(--c-blue)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className={`text-base font-bold ${textColorClass} relative z-10 ml-24`}>
              SOCIETY
            </span>
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <span className={`text-sm font-bold ${textColorClass}`}>
            Since 1901
          </span>
        </div>
      </div>
    </Link>
  );
}

