import { Fragment } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./Project.css";

const FACTORS = [
  { label: "项目奖金基数", sub: "规模·价值·难度·标准" },
  { label: "周期变动系数", sub: "1 + (计划−实际)/计划" },
  { label: "贡献权重", sub: "负责人分配·合计100%" },
  { label: "入职年限系数", sub: "<0.5年:0.6 | 0.5-1年:0.8 | ≥1年:1.0" },
  { label: "奖惩系数", sub: "奖励1.1-1.5 · 惩罚0-0.8" },
];

/** Compact formula reference bar — shows which factor is being explained. */
function FormulaStrip({ highlight }: { highlight: number[] }) {
  return (
    <div className="pj-formula-strip">
      {FACTORS.map((f, i) => (
        <Fragment key={f.label}>
          <span
            className={`pj-strip-item ${highlight.includes(i) ? "pj-strip-item--hl" : ""}`}
          >
            {f.label}
          </span>
          {i < FACTORS.length - 1 && <span className="pj-strip-op">×</span>}
        </Fragment>
      ))}
    </div>
  );
}

export default function Project({ step }: ChapterStepProps) {
  return (
    <div className="pj-scene">
      {/* Background: blueprint gears */}
      <div className="pj-bg">
        <div className="pj-gear pj-gear--lg" />
        <div className="pj-gear pj-gear--sm" />
        <div className="pj-gear pj-gear--md" />
      </div>

      {/* ── Step 0: Pre-conditions ── */}
      {step === 0 && (
        <div className="pj-frame pj-frame--center">
          <p className="pj-section-label">项目奖金</p>
          <div className="pj-conditions">
            <div className="pj-cond card">
              <span className="pj-cond-icon">✓</span>
              <span className="pj-cond-text">已转正</span>
            </div>
            <div className="pj-cond card">
              <span className="pj-cond-icon">✓</span>
              <span className="pj-cond-text">成本未严重超支</span>
            </div>
          </div>
          <p className="pj-warn">超支 → 奖金直接清零</p>
        </div>
      )}

      {/* ── Step 1: Full formula — uniform factor cards ── */}
      {step === 1 && (
        <div className="pj-frame pj-frame--center">
          <p className="pj-section-label">项目奖金公式</p>
          <div className="pj-formula-chain">
            {FACTORS.map((f, i) => (
              <Fragment key={f.label}>
                <div
                  className="pj-factor pj-factor--in"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <span className="pj-factor-label">{f.label}</span>
                  <span className="pj-factor-sub">{f.sub}</span>
                </div>
                {i < FACTORS.length - 1 && (
                  <span className="pj-factor-mul">×</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 2: Project tiers — highlights "基数" in strip ── */}
      {step === 2 && (
        <div className="pj-frame pj-frame--center">
          <FormulaStrip highlight={[0]} />
          <p className="pj-section-label">基数由项目等级决定</p>
          <div className="pj-tiers-row">
            <div className="pj-tier pj-tier--major card">
              <span className="pj-tier-badge">一类</span>
              <span className="pj-tier-label">重大项目</span>
              <span className="pj-tier-status">立项申请确认</span>
            </div>
            <div className="pj-tier pj-tier--normal card">
              <span className="pj-tier-badge">二类</span>
              <span className="pj-tier-label">常规项目</span>
              <span className="pj-tier-status">特殊情况可申请</span>
            </div>
            <div className="pj-tier pj-tier--none card">
              <span className="pj-tier-badge">三类</span>
              <span className="pj-tier-label">小型项目</span>
              <span className="pj-tier-status pj-tier-no">不纳入奖金范围</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 3: Cycle coefficient — highlights "周期变动" in strip ── */}
      {step === 3 && (
        <div className="pj-frame pj-frame--center">
          <FormulaStrip highlight={[1]} />
          <p className="pj-cycle-formula">
            周期变动系数 = 1 +{" "}
            <span className="pj-frac">
              <span>计划 − 实际</span>
              <span className="pj-frac-bar">∕</span>
              <span>计划</span>
            </span>
          </p>
          <div className="pj-cycle-bars">
            <div className="pj-cycle-case">
              <span className="pj-cycle-label">提前完工</span>
              <div className="pj-cycle-bar-wrap">
                <div className="pj-cycle-bar pj-cycle-bar--good" style={{ width: "100%" }} />
              </div>
              <span className="pj-cycle-val pj-cycle-val--good">系数 ＞ 1</span>
            </div>
            <div className="pj-cycle-case">
              <span className="pj-cycle-label">工期拖延</span>
              <div className="pj-cycle-bar-wrap">
                <div className="pj-cycle-bar pj-cycle-bar--bad" style={{ width: "50%" }} />
              </div>
              <span className="pj-cycle-val pj-cycle-val--bad">系数 ＜ 1</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 4: Contribution + Tenure — highlights "贡献权重" & "年限" ── */}
      {step === 4 && (
        <div className="pj-frame pj-frame--center">
          <FormulaStrip highlight={[2, 3]} />
          <div className="pj-contrib-row">
            <div className="pj-pie-wrap">
              <svg viewBox="0 0 200 200" className="pj-pie">
                <circle cx="100" cy="100" r="80" fill="none" stroke="var(--rule)" strokeWidth="30" />
                <circle
                  cx="100" cy="100" r="80" fill="none" stroke="var(--accent)" strokeWidth="30"
                  strokeDasharray="352 150" strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                  strokeLinecap="round"
                />
              </svg>
              <span className="pj-pie-label">贡献权重 100%</span>
            </div>
            <div className="pj-tenure">
              <p className="pj-tenure-title">入职年限系数</p>
              <div className="pj-tenure-bars">
                <div className="pj-tenure-item">
                  <span>&lt;0.5年</span>
                  <span className="pj-tenure-val">0.6</span>
                </div>
                <div className="pj-tenure-item">
                  <span>0.5~1年</span>
                  <span className="pj-tenure-val">0.8</span>
                </div>
                <div className="pj-tenure-item pj-tenure-item--full">
                  <span>≥1年</span>
                  <span className="pj-tenure-val">1.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 5: Reward/Punishment — highlights "奖惩" in strip ── */}
      {step === 5 && (
        <div className="pj-frame pj-frame--center">
          <FormulaStrip highlight={[4]} />
          <p className="pj-section-label">奖惩系数 · 浮动最大</p>
          <div className="pj-reward-range">
            <div className="pj-reward-zone pj-reward-zone--bad">
              <span className="pj-reward-tag">惩罚</span>
              <div className="pj-reward-bar-wrap">
                <div className="pj-reward-bar pj-reward-bar--bad" style={{ width: "56%" }} />
              </div>
              <span className="pj-reward-nums">0 — 0.8</span>
              <span className="pj-reward-cause">敷衍 · 失误 · 违规</span>
            </div>
            <div className="pj-reward-zone pj-reward-zone--good">
              <span className="pj-reward-tag">奖励</span>
              <div className="pj-reward-bar-wrap">
                <div className="pj-reward-bar pj-reward-bar--good" style={{ width: "100%" }} />
              </div>
              <span className="pj-reward-nums">1.1 — 1.5</span>
              <span className="pj-reward-cause">复用组件 · 突出贡献</span>
            </div>
          </div>
          <p className="pj-footnote">这一项上下能差好几倍</p>
        </div>
      )}

      {/* ── Step 6: Summary ── */}
      {step === 6 && (
        <div className="pj-frame pj-frame--center">
          <p className="pj-section-label">五因子同屏</p>
          <div className="pj-summary">
            <span className="pj-sum-item">基数</span>
            <span className="pj-sum-op">×</span>
            <span className="pj-sum-item">周期系数</span>
            <span className="pj-sum-op">×</span>
            <span className="pj-sum-item">贡献权重</span>
            <span className="pj-sum-op">×</span>
            <span className="pj-sum-item">年限系数</span>
            <span className="pj-sum-op">×</span>
            <span className="pj-sum-item pj-sum-item--hl">奖惩系数</span>
          </div>
          <p className="pj-result">= 项目奖金</p>
        </div>
      )}
    </div>
  );
}
