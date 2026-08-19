import Image from "next/image";
import Link from "next/link";

const solutions = [
  { href: "/solutions/healthcare", label: "Healthcare" },
  { href: "/solutions/government", label: "Government" },
  { href: "/solutions/fintech", label: "Fintech" },
] as const;

const resources = [
  { href: "/resources/about", label: "About us" },
  { href: "/resources/press", label: "Press" },
  { href: "/resources/blog", label: "Blog" },
] as const;

const primaryLinks = [
  { href: "/product", label: "Product" },
  { href: "/academy", label: "Academy" },
  { href: "/events", label: "Event" },
] as const;

const linkClass =
  "relative inline-block w-fit self-start text-[#515151] transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#515151] after:transition-transform after:duration-200 hover:text-[#010101] hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:text-[#010101] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700";

function FooterGroup({
  label,
  links,
}: {
  label: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div className="flex min-w-[90px] flex-col gap-5">
      <p className="font-medium leading-[1.1] text-[#010101]">{label}</p>
      <ul className="flex flex-col gap-5 text-[#515151]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#F3F3F4] bg-[#FDFDFD] px-6 pb-10 pt-12 text-sm leading-[1.1] md:px-10 md:pb-10 md:pt-[60px]">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12 md:min-h-[100px] md:flex-row md:items-end md:justify-between md:gap-10">
        <div className="flex shrink-0 flex-col items-start gap-[43px]">
          <Link
            href="/"
            aria-label="Koderea home"
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
          >
            <Image
              src="/brand/logo-koderea.svg"
              alt="Koderea"
              width={158}
              height={36}
              className="block"
            />
          </Link>

          <div className="flex flex-col gap-3 leading-[1.1] text-[#515151]">
            <p>Copyright © 2026 Koderea.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="w-full md:w-auto">
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 md:flex md:items-start md:gap-[60px]">
            <Link href={primaryLinks[0].href} className={`${linkClass} font-medium text-[#010101]`}>
              {primaryLinks[0].label}
            </Link>

            <FooterGroup label="Solutions" links={solutions} />

            <Link href={primaryLinks[1].href} className={`${linkClass} font-medium text-[#010101]`}>
              {primaryLinks[1].label}
            </Link>

            <Link href={primaryLinks[2].href} className={`${linkClass} font-medium text-[#010101]`}>
              {primaryLinks[2].label}
            </Link>

            <FooterGroup label="Resource" links={resources} />
          </div>
        </nav>
      </div>
    </footer>
  );
}
