import Image from "next/image";
import Link from "next/link";
import { digitalLocksProducts } from "@/data/digitalLocksProducts";

export function DigitalLocksProductGrid() {
  return (
    <div className="product-grid">
      {digitalLocksProducts.map((product) => (
        <article className="product-card" key={product.href}>
          <Link className="product-card__image-link" href={product.href}>
            <Image
              src={product.image}
              alt={product.imageAlt}
              width={300}
              height={300}
              className="product-card__image"
            />
          </Link>
          <div className="product-card__body">
            <h2 className="product-card__title">
              <Link href={product.href}>{product.title}</Link>
            </h2>
          </div>
        </article>
      ))}
    </div>
  );
}
