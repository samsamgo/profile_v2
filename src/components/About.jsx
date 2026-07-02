import Section from "./Section";
import { values } from "../data/content";

export default function About() {
  return (
    <Section id="about" label="Introduction" title="이런 개발자입니다">
      <div className="value-grid">
        {values.map((v, i) => (
          <article
            className="value-card"
            key={v.title}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <span className="value-icon" aria-hidden="true">
              {v.icon}
            </span>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
