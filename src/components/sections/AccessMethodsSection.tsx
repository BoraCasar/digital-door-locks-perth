import { SectionHeading } from "@/components/ui/SectionHeading";

const methods = [
  {
    label: "Smart Phone via Bluetooth",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    label: "Fingerprint",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
        <path d="M18 21a6 6 0 0 0-12 0" />
      </svg>
    ),
  },
  {
    label: "Key Override",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
        <rect x="5" y="10" width="14" height="11" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "Wi-Fi via Gateway",
    note: "*Optional Extra",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12.5a7 7 0 0 1 14 0" />
        <path d="M8.5 16.5 7 22h10l-1.5-5.5" />
      </svg>
    ),
  },
] as const;

export function AccessMethodsSection() {
  return (
    <section className="section section--alt" id="access-methods">
      <div className="container">
        <SectionHeading centered eyebrow="Access methods" title="How You Can Unlock" />

        <ul className="access-strip">
          {methods.map((method) => (
            <li className="access-strip__item" key={method.label}>
              <span className="access-strip__icon" aria-hidden="true">
                {method.icon}
              </span>
              <span className="access-strip__label">{method.label}</span>
              {"note" in method ? <span className="access-strip__note">{method.note}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
