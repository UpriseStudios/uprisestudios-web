export default function UpriseCatMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-label="Uprise cat mark"
    >
      {/* Simple cat outline (placeholder). Swap with your exact SVG later */}
      <path
        d="M34 82c7 10 18 16 32 16 18 0 32-12 36-28 2-8 0-17-4-24-3-5-7-9-13-12l-7-14-9 12c-3-1-6-2-10-2-5 0-9 1-13 3l-10-13-6 16c-8 6-13 16-13 27 0 7 2 13 5 19Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
