import { useMemo, useState } from "react";
import Section from "./Section";
import { blogStats } from "../data/content";

const SIZE = 280;
const RADIUS = 110;
const STROKE = 36;
const CIRC = 2 * Math.PI * RADIUS;

// nivo 의존성 없이 SVG로 직접 그리는 도넛 차트
function Donut({ data, activeId, onHover }) {
  const total = data.reduce((s, d) => s + d.value, 0);

  const segments = useMemo(() => {
    let acc = 0;
    return data.map((d) => {
      const start = acc / total;
      acc += d.value;
      return { ...d, start, ratio: d.value / total };
    });
  }, [data, total]);

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="donut"
      role="img"
      aria-label="블로그 글 카테고리 분포"
    >
      <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}>
        {segments.map((seg) => (
          <circle
            key={seg.id}
            className={`donut-seg ${
              activeId && activeId !== seg.id ? "dim" : ""
            } ${activeId === seg.id ? "lift" : ""}`}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke={seg.color}
            strokeWidth={activeId === seg.id ? STROKE + 8 : STROKE}
            strokeDasharray={`${Math.max(seg.ratio * CIRC - 3, 1)} ${CIRC}`}
            strokeDashoffset={-seg.start * CIRC}
            strokeLinecap="butt"
            onMouseEnter={() => onHover(seg.id)}
            onMouseLeave={() => onHover(null)}
          />
        ))}
      </g>
      <text x="50%" y="46%" textAnchor="middle" className="donut-total">
        {total}
      </text>
      <text x="50%" y="58%" textAnchor="middle" className="donut-caption">
        posts
      </text>
    </svg>
  );
}

export default function Blog() {
  const [activeId, setActiveId] = useState(null);
  const active = blogStats.data.find((d) => d.id === activeId);
  const total = blogStats.data.reduce((s, d) => s + d.value, 0);

  return (
    <Section id="blog" label="Study & Records" title={blogStats.heading}>
      <p className="section-desc">{blogStats.body}</p>

      <div className="blog-layout">
        <div className="blog-chart">
          <Donut
            data={blogStats.data}
            activeId={activeId}
            onHover={setActiveId}
          />
          <div className={`chart-tip ${active ? "show" : ""}`}>
            {active && (
              <>
                <strong style={{ color: active.color }}>{active.id}</strong>
                <span>
                  {active.value}개 · {Math.round((active.value / total) * 100)}%
                </span>
                <p>{active.desc}</p>
              </>
            )}
          </div>
        </div>

        <ul className="blog-legend">
          {blogStats.data.map((d) => (
            <li
              key={d.id}
              className={activeId === d.id ? "active" : ""}
              onMouseEnter={() => setActiveId(d.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <span className="dot" style={{ background: d.color }} />
              <div className="legend-text">
                <strong>{d.id}</strong>
                <p>{d.desc}</p>
              </div>
              <span className="legend-count">{d.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="center">
        <a
          className="btn btn-primary"
          href={blogStats.link}
          target="_blank"
          rel="noreferrer"
        >
          블로그 방문하기 ↗
        </a>
      </div>
    </Section>
  );
}
