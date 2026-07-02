import { useEffect, useState } from "react";
import Section from "./Section";
import { projects } from "../data/content";
import useReveal from "../hooks/useReveal";
import ProjectMap from "./ProjectMap";

function Gallery({ images, name }) {
  const [idx, setIdx] = useState(0);

  // 이미지가 여러 장이면 자동 슬라이드
  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % images.length),
      3500
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="gallery">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${name} 스크린샷 ${i + 1}`}
          className={i === idx ? "show" : ""}
          loading="lazy"
        />
      ))}
      {images.length > 1 && (
        <div className="gallery-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={i === idx ? "on" : ""}
              onClick={() => setIdx(i)}
              aria-label={`${i + 1}번 이미지 보기`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`project-card reveal ${visible ? "in-view" : ""} ${
        index % 2 === 1 ? "project-card--flip" : ""
      }`}
    >
      <div className="project-media">
        {project.map ? (
          <ProjectMap />
        ) : (
          <Gallery images={project.gallery} name={project.name} />
        )}
      </div>

      <div className="project-body">
        <div className="project-title">
          <img src={project.logo} alt="" className="project-logo" />
          <div>
            <h3>{project.name}</h3>
            <p className="project-meta">
              {project.period} · {project.team}
            </p>
          </div>
        </div>

        <p className="project-summary">{project.summary}</p>

        <ul className="project-highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.links.map((l) => (
            <a
              key={l.url}
              className="btn btn-ghost btn-sm"
              href={l.url}
              target="_blank"
              rel="noreferrer"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" label="Projects" title="만들어 온 것들">
      <div className="project-list">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
