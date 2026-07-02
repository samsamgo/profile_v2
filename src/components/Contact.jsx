import Section from "./Section";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="함께 일하고 싶다면" className="contact">
      <p className="section-desc center-text">
        새로운 기회와 배움은 언제나 환영합니다.
        <br />
        프로젝트 협업, 채용, 커피챗 — 편하게 연락 주세요.
      </p>
      <div className="contact-links">
        <a
          className="contact-card"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon" aria-hidden="true">
            {"</>"}
          </span>
          <strong>GitHub</strong>
          <p>github.com/samsamgo</p>
        </a>
        <a
          className="contact-card"
          href={profile.blog}
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon" aria-hidden="true">
            ✎
          </span>
          <strong>Tech Blog</strong>
          <p>samsamgoo.tistory.com</p>
        </a>
      </div>
    </Section>
  );
}
