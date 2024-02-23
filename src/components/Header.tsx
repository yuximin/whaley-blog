import Link from "next/link"

export default function Header() {
    return (
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="px-6 flex items-center justify-between h-[50px] bg-white dark:bg-zinc-950 text-2xl font-semibold">
          Whaley Blog
        </h1>
        <div className="flex gap-6 md:gap-10">
          <Link className="inline-block w-full font-medium text-lg px-6 py-1 leading-loose active:bg-zinc-400/10"
                href="/articles">Home</Link>
          <Link className="inline-block w-full font-medium text-lg px-6 py-1 leading-loose active:bg-zinc-400/10"
                href="/tags">Tags</Link>
          <Link className="inline-block w-full font-medium text-lg px-6 py-1 leading-loose active:bg-zinc-400/10"
                href="/about">
            About
          </Link>
        </div>
      </div>
    )
}