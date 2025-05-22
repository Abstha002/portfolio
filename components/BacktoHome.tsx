import Link from "next/link";

export default function BacktoHome() {
  return (
    <Link href="/" passHref>
      <button
        type="button"
        aria-label="Back to Home"
        className="flex items-center  px-4 py-2 rounded-lg border border-black-500 text-black-600 font-semibold hover:bg-blue-500 hover:text-white transition group"
      >
        <span
          className="inline-block transform transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
        >
          {/* Left Arrow SVG */}
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="sr-only">Back to Home</span>
      </button>
    </Link>
  );
}
