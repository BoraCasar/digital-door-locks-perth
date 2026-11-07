import Link from "next/link";

type PageBannerProps = {
  title: string;
  parents?: { href: string; label: string }[];
};

export function PageBanner({ title, parents = [{ href: "/", label: "Home" }] }: PageBannerProps) {
  return (
    <section className="page-banner" aria-labelledby="page-banner-title">
      <div className="container page-banner__inner">
        <h1 id="page-banner-title">{title}</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol className="breadcrumb__list">
            {parents.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
