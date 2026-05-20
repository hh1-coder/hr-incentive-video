import type { ChapterStepProps } from "../../registry/types";
import "./Talent.css";

const TIERS = [
  { title: "初级工程师", range: "500 – 1,000", pct: "8%-12%", width: 25 },
  { title: "中级工程师", range: "1,000 – 1,500", pct: "10%-15%", width: 45 },
  { title: "高级工程师", range: "1,000 – 2,000", pct: "12%-18%", width: 65 },
  { title: "主管 / 技术专家", range: "1,500 – 3,000", pct: "10%-15%", width: 100 },
];

export default function Talent({ step }: ChapterStepProps) {
  return (
    <div className="tl-scene">
      {/* Background: floating particles going upward */}
      <div className="tl-bg">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="tl-particle"
            style={{
              left: `${5 + (i * 8) % 90}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* ── Step 0: Qualification ── */}
      {step === 0 && (
        <div className="tl-frame tl-frame--center">
          <p className="tl-section-label">储备人才津贴</p>
          <div className="tl-qual-badge">
            <span className="tl-qual-icon">◆</span>
            <span>拟晋升储备人员</span>
          </div>
          <p className="tl-qual-hint">满足资质要求，考核期内发放</p>
        </div>
      )}

      {/* ── Step 1: Two algorithms ── */}
      {step === 1 && (
        <div className="tl-frame tl-frame--wide">
          <p className="tl-section-label">金额算法 · 取合理值</p>
          <div className="tl-algos">
            <div className="tl-algo card">
              <span className="tl-algo-label">算法一</span>
              <span className="tl-algo-formula">目标岗位工资 × 10%-20%</span>
            </div>
            <div className="tl-algo card">
              <span className="tl-algo-label">算法二</span>
              <span className="tl-algo-formula">(目标 − 当前) × 30%-50%</span>
            </div>
          </div>
          <div className="tl-ceiling">
            <span className="tl-ceiling-line" />
            <span className="tl-ceiling-text">不超过目标岗位薪酬的 20%</span>
          </div>
        </div>
      )}

      {/* ── Step 2-3: Salary ladder ── */}
      {step >= 2 && (
        <div className="tl-frame tl-frame--ladder">
          <p className="tl-section-label">每月参考金额（元）</p>
          <div className="tl-ladder">
            {TIERS.map((t, i) => (
              <div
                key={t.title}
                className={`tl-rung ${step >= 2 && i <= (step === 2 ? TIERS.length - 1 : 99) ? "tl-rung--on" : ""}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="tl-rung-bar" style={{ width: `${t.width}%` }}>
                  <span className="tl-rung-title">{t.title}</span>
                </div>
                <span className="tl-rung-range">{t.range}</span>
                <span className="tl-rung-pct">{t.pct}</span>
              </div>
            ))}
          </div>
          {step === 3 && (
            <p className="tl-note">额外发放 · 在正常工资之外</p>
          )}
        </div>
      )}

      {/* ── Step 4: Silent visual hold ── */}
      {step === 4 && (
        <div className="tl-frame tl-frame--center">
          <div className="tl-ladder tl-ladder--final">
            {TIERS.map((t) => (
              <div key={t.title} className="tl-rung tl-rung--on">
                <div className="tl-rung-bar" style={{ width: `${t.width}%` }}>
                  <span className="tl-rung-title">{t.title}</span>
                </div>
                <span className="tl-rung-range">{t.range}</span>
              </div>
            ))}
          </div>
          <p className="tl-note tl-note--final">额外发放 · 在正常工资之外</p>
        </div>
      )}
    </div>
  );
}
