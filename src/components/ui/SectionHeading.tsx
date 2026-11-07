import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  centered?: boolean;
  id?: string;
};

export function SectionHeading({ eyebrow, title, lead, centered, id }: SectionHeadingProps) {
  return (
    <div className={`section-heading${centered ? " section-heading--center" : ""}`}>
      {eyebrow ? <span className="section-heading__eyebrow">{eyebrow}</span> : null}
      <h2 id={id}>{title}</h2>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </div>
  );
}
