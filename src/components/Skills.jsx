import { useState } from "react";
import Section from "./Section";
import { skillGroups } from "../data/content";
import useReveal from "../hooks/useReveal";

function SkillCard({ skill, index }) {
  const [ref, visible] = useReveal({ threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={`skill-card reveal ${visible ? "in-view" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="skill-head">
        <h3>{skill.name}</h3>
        <span className="skill-percent">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <span
          className="skill-fill"
          style={{ width: visible ? `${skill.level}%` : "0%" }}
        />
      </div>
      <p>{skill.desc}</p>
    </article>
  );
}

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].key);
  const group = skillGroups.find((g) => g.key === active);

  return (
    <Section id="skills" label="Skills" title="다룰 수 있는 기술">
      <div className="tab-row" role="tablist" aria-label="기술 분류">
        {skillGroups.map((g) => (
          <button
            key={g.key}
            role="tab"
            aria-selected={active === g.key}
            className={`tab ${active === g.key ? "tab--active" : ""}`}
            onClick={() => setActive(g.key)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="skill-grid" key={active}>
        {group.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </Section>
  );
}
