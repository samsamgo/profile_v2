import { useEffect, useState } from "react";
import { profile } from "../data/content";

const TYPING_WORDS = [
  "사용자 경험을 설계합니다",
  "React로 인터페이스를 만듭니다",
  "기록하며 성장합니다",
  "팀과 함께 완성합니다",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIdx % TYPING_WORDS.length];
    let delay = deleting ? 40 : 90;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % TYPING_WORDS.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIdx]);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <p className="hero-hello">안녕하세요, 저는</p>
        <h1 className="hero-name">
          <span className="gradient-text">{profile.name}</span> 입니다
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-typing">
          {text}
          <span className="caret" aria-hidden="true" />
        </p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            프로젝트 보기
          </a>
          <a
            className="btn btn-ghost"
            href={profile.blog}
            target="_blank"
            rel="noreferrer"
          >
            기술 블로그 ↗
          </a>
        </div>
      </div>

      <a
        className="hero-scroll"
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="아래로 스크롤"
      >
        <span className="mouse">
          <span className="wheel" />
        </span>
        Scroll
      </a>
    </section>
  );
}
