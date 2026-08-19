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
  className = "",
  listClassName = "",
}: {
  label: string;
  links: ReadonlyArray<{ href: string; label: string }>;
  className?: string;
  listClassName?: string;
}) {
  return (
    <div className={`flex min-w-[90px] flex-col gap-5 ${className}`}>
      <p className="font-medium leading-[1.1] text-[#010101]">{label}</p>
      <ul className={`flex flex-col gap-5 text-[#515151] ${listClassName}`}>
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
    <footer className="border-t border-[#F3F3F4] bg-[#FDFDFD] px-6 pb-8 pt-12 text-[15px] leading-[1.1] md:px-10 md:pb-10 md:pt-[60px] md:text-sm">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 md:min-h-[100px] md:grid-cols-[minmax(180px,1fr)_auto] md:grid-rows-[auto_auto] md:gap-x-10">
        <Link
          href="/"
          aria-label="Koderea home"
          className="w-fit rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700 md:self-start"
        >
          <Image
            src="/brand/logo-koderea.svg"
            alt="Koderea"
            width={158}
            height={36}
            className="h-auto w-[142px] md:w-[158px]"
          />
        </Link>

        <nav aria-label="Footer navigation" className="mt-12 w-full md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:w-auto md:self-start">
          <div className="grid grid-cols-2 gap-x-8 gap-y-11 md:flex md:items-start md:gap-[60px]">
            <div className="flex flex-col gap-6 md:contents">
              <Link href={primaryLinks[0].href} className={`${linkClass} font-medium text-[#010101] md:order-1`}>
                {primaryLinks[0].label}
              </Link>

              <Link href={primaryLinks[1].href} className={`${linkClass} font-medium text-[#010101] md:order-3`}>
                {primaryLinks[1].label}
              </Link>

              <Link href={primaryLinks[2].href} className={`${linkClass} font-medium text-[#010101] md:order-4`}>
                {primaryLinks[2].label}
              </Link>
            </div>

            <FooterGroup label="Solutions" links={solutions} className="md:order-2" />

            <FooterGroup
              label="Resource"
              links={resources}
              className="col-span-2 md:order-5 md:col-span-1"
              listClassName="flex-row flex-wrap gap-x-8 gap-y-4 md:flex-col md:gap-x-0 md:gap-y-5"
            />
          </div>
        </nav>

        <div className="mt-12 flex flex-wrap gap-x-2 gap-y-2 border-t border-[#E2E7EF] pt-6 text-[13px] leading-[1.4] text-[#515151] md:col-start-1 md:row-start-2 md:mt-[43px] md:flex-col md:gap-3 md:border-0 md:pt-0 md:text-sm md:leading-[1.1]">
          <p>Copyright © 2026 Koderea.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
