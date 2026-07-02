import Section from "./Section";
import { education } from "../data/content";
import useReveal from "../hooks/useReveal";

function TimelineItem({ item, index }) {
  const [ref, visible] = useReveal({ threshold: 0.3 });

  return (
    <li
      ref={ref}
      className={`timeline-item reveal ${visible ? "in-view" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="timeline-dot" aria-hidden="true" />
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </li>
  );
}

export default function Education() {
  return (
    <Section id="education" label="Education" title={education.name}>
      <p className="section-desc">
        <strong className="edu-course">{education.course}</strong>
        <br />
        {education.intro}
      </p>

      <ul className="timeline">
        {education.outcomes.map((item, i) => (
          <TimelineItem key={item.title} item={item} index={i} />
        ))}
      </ul>

      <div className="center">
        <a
          className="btn btn-ghost"
          href={education.link}
          target="_blank"
          rel="noreferrer"
        >
          커리큘럼 보기 ↗
        </a>
      </div>
    </Section>
  );
}
