import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#f8f4f2] px-6 text-center text-[#1a0e14]">
      <p className="font-['Geist:Medium'] text-xs tracking-[0.3em] uppercase">
        Page not found
      </p>
      <h1 className="font-['Geist:Medium'] text-5xl tracking-[-0.06em] md:text-7xl">
        Let&apos;s head{" "}
        <span className="font-['Instrument_Serif:Italic'] italic">home.</span>
      </h1>
      <Link
        href="/"
        className="rounded-full bg-[#1a0e14] px-6 py-3 font-['Geist:Medium'] text-sm text-white"
      >
        Back to home
      </Link>
    </main>
  )
}
