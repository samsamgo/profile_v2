import useReveal from "../hooks/useReveal";

// 공통 섹션 래퍼: 상단 라벨(영문) + 제목(국문) + reveal 애니메이션
export default function Section({ id, label, title, children, className = "" }) {
  const [ref, visible] = useReveal();

  return (
    <section id={id} className={`section ${className}`}>
      <div ref={ref} className={`section-inner reveal ${visible ? "in-view" : ""}`}>
        {label && (
          <div className="section-head">
            <span className="section-label">{label}</span>
            {title && <h2 className="section-title">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
