import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  stats?: { label: string; value: string }[];
}

export default function PageHeader({
  title,
  highlight,
  subtitle,
  breadcrumbs,
  stats,
}: PageHeaderProps) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="wrap">
        <nav className="breadcrumbs" aria-label="Ruta de navegación">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li
                  key={index}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  {item.href && !isLast ? (
                    <Link href={item.href} itemProp="item">
                      <span itemProp="name">{item.label}</span>
                    </Link>
                  ) : (
                    <span itemProp="name" aria-current={isLast ? 'page' : undefined}>
                      {item.label}
                    </span>
                  )}
                  <meta itemProp="position" content={String(index + 1)} />
                  {!isLast && <span className="bc-sep" aria-hidden="true">/</span>}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="page-hero-grid">
          <div className="page-hero-copy">
            <h1 id="page-title">
              {title}
              {highlight && <span className="hl"> {highlight}</span>}
              <span className="punto">.</span>
            </h1>
            <p className="page-lead">{subtitle}</p>
          </div>

          {stats && stats.length > 0 && (
            <div className="page-hero-stats">
              {stats.map((stat, i) => (
                <div key={i} className="page-stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
