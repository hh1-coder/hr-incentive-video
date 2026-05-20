import type { ChapterStepProps } from "../../registry/types";
import "./Performance.css";

const COEFFS = [
  { grade: "S", score: "120-110", coeff: "1.2", note: "≤20%", accent: true },
  { grade: "A", score: "110-100", coeff: "1.1", note: "", accent: false },
  { grade: "B", score: "100-90", coeff: "1.0", note: "80-100%", accent: false },
  { grade: "B-", score: "90-80", coeff: "0.8", note: "", accent: false },
  { grade: "C", score: "80-70", coeff: "0.6", note: "", accent: false },
  { grade: "D", score: "<70", coeff: "0", note: "", accent: false },
];

const INDICATORS = [
  "新产品上线数", "新版本上线数", "产品重要缺陷率", "问题关闭率",
  "线上故障修复率", "研发成果验收通过率", "需求变更成本占比",
  "研发资源浪费率", "研发任务准时完成率", "紧急需求响应周期",
];

export default function Performance({ step }: ChapterStepProps) {
  return (
    <div className="pf-scene">
      {/* Background: faint grid + sparkle dots — always present */}
      <div className="pf-bg">
        <div className="pf-grid" />
        <div className="pf-dot pf-dot--1" />
        <div className="pf-dot pf-dot--2" />
        <div className="pf-dot pf-dot--3" />
        <div className="pf-dot pf-dot--4" />
      </div>

      {/* ── Step 0: Formula ── */}
      {step === 0 && (
        <div className="pf-frame pf-frame--center">
          <p className="pf-section-label">绩效奖金</p>
          <div className="pf-formula">
            <span className="pf-formula-part">绩效工资基数</span>
            <span className="pf-formula-op">×</span>
            <span className="pf-formula-part">考核系数</span>
            <span className="pf-formula-op">×</span>
            <span className="pf-formula-part">出勤率</span>
          </div>
        </div>
      )}

      {/* ── Step 1: Coefficient bars ── */}
      {step === 1 && (
        <div className="pf-frame pf-frame--wide">
          <p className="pf-section-label">考核系数</p>
          <div className="pf-coeff-table">
            {COEFFS.map((c, i) => (
              <div
                key={c.grade}
                className={`pf-coeff-row ${c.accent ? "pf-coeff-row--accent" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="pf-coeff-grade">{c.grade}</span>
                <div className="pf-coeff-bar-wrap">
                  <div
                    className="pf-coeff-bar"
                    style={{ width: `${parseFloat(c.coeff) * 80}%` }}
                  />
                </div>
                <span className="pf-coeff-val">{c.coeff}</span>
                <span className="pf-coeff-score">{c.score}</span>
                {c.note && <span className="pf-coeff-note">{c.note}</span>}
              </div>
            ))}
          </div>
          <p className="pf-footnote">S 级人数原则上不超过 20%</p>
        </div>
      )}

      {/* ── Step 2: Attendance card ── */}
      {step === 2 && (
        <div className="pf-frame pf-frame--center">
          <p className="pf-section-label">出勤率</p>
          <div className="pf-attend-card card">
            <div className="pf-attend-body">
              <div className="pf-attend-item">
                <span className="pf-attend-icon">⎋</span>
                <span>请假 / 产假 / 入离职</span>
                <span className="pf-attend-arrow">→</span>
                <span className="pf-attend-result">按实际天数折算</span>
              </div>
              <div className="pf-attend-item">
                <span className="pf-attend-icon">∅</span>
                <span>当月未考核</span>
                <span className="pf-attend-arrow">→</span>
                <span className="pf-attend-result">系数按 1.0</span>
              </div>
            </div>
          </div>
          <p className="pf-attend-note">不扣你钱</p>
        </div>
      )}

      {/* ── Step 3: Transition ── */}
      {step === 3 && (
        <div className="pf-frame pf-frame--center">
          <p className="pf-big-question">S 和 B 怎么评？</p>
          <p className="pf-category-hint">考核指标分两类</p>
        </div>
      )}

      {/* ── Step 4: Quantitative indicators ── */}
      {step === 4 && (
        <div className="pf-frame pf-frame--list">
          <p className="pf-list-head">
            <span className="pf-list-badge">定量</span>
            10 项指标
          </p>
          <div className="pf-list">
            {INDICATORS.map((name, i) => (
              <div
                key={name}
                className="pf-list-item pf-list-item--in"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="pf-list-dot" />
                <span className="pf-list-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 5: Qualitative + closing ── */}
      {step === 5 && (
        <div className="pf-frame pf-frame--center">
          <p className="pf-section-label">定性指标</p>
          <div className="pf-qual">
            <div className="pf-qual-item">
              <span className="pf-qual-badge">定性</span>
              <span className="pf-qual-name">工作主动性</span>
              <span className="pf-qual-desc">主动承担任务和提出改进建议</span>
            </div>
            <div className="pf-qual-item">
              <span className="pf-qual-badge">定性</span>
              <span className="pf-qual-name">沟通协调</span>
              <span className="pf-qual-desc">内外部沟通效果和冲突处理</span>
            </div>
          </div>
          <p className="pf-closing">具体指标嵌在每个人的考核表里，对着看就行</p>
        </div>
      )}
    </div>
  );
}
