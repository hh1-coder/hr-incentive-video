import type { ChapterStepProps } from "../../registry/types";
import "./Rules.css";

export default function Rules({ step }: ChapterStepProps) {
  return (
    <div className="ru-scene">
      {/* Background shapes decelerating */}
      <div className="ru-bg">
        <div className="ru-blob ru-blob--a" />
        <div className="ru-blob ru-blob--b" />
      </div>

      {/* ── Step 0: Three core rules ── */}
      {step === 0 && (
        <div className="ru-frame ru-frame--center">
          <p className="ru-section-label">最后三件事</p>
          <div className="ru-rules">
            <div className="ru-rule-item">
              <span className="ru-rule-num">1</span>
              <span className="ru-rule-text">不再单独提加班费，费用已并入方案</span>
            </div>
            <div className="ru-rule-item">
              <span className="ru-rule-num">2</span>
              <span className="ru-rule-text">与旧约定冲突，以本方案为准</span>
            </div>
            <div className="ru-rule-item ru-rule-item--accent">
              <span className="ru-rule-num">3</span>
              <span className="ru-rule-text">试行 3 周期，仅记录 · 不影响工资</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 1: Trial timeline ── */}
      {step === 1 && (
        <div className="ru-frame ru-frame--center">
          <p className="ru-section-label">试行时间轴</p>
          <div className="ru-timeline">
            <div className="ru-tl-node ru-tl-node--active">
              <span className="ru-tl-dot" />
              <span className="ru-tl-label">试行期 3 周期</span>
              <span className="ru-tl-sub">记录考核，工资不变</span>
            </div>
            <div className="ru-tl-connector" />
            <div className="ru-tl-node">
              <span className="ru-tl-dot" />
              <span className="ru-tl-label">试行期满</span>
              <span className="ru-tl-sub">无修订调整</span>
            </div>
            <div className="ru-tl-connector" />
            <div className="ru-tl-node">
              <span className="ru-tl-dot ru-tl-dot--dest" />
              <span className="ru-tl-label">正式生效</span>
              <span className="ru-tl-sub">钱跟着走</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 2: Compliance ── */}
      {step === 2 && (
        <div className="ru-frame ru-frame--comply">
          <div className="ru-comply-card card">
            <p className="ru-comply-title">合规须知</p>
            <div className="ru-comply-items">
              <span>遵照公司公共规章制度</span>
              <span className="ru-comply-sep">·</span>
              <span>违法违规将追责及损失追偿</span>
              <span className="ru-comply-sep">·</span>
              <span>未尽事宜按公司规定执行</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 3: Attachments ── */}
      {step === 3 && (
        <div className="ru-frame ru-frame--center">
          <p className="ru-section-label">相关附件</p>
          <div className="ru-files">
            <div className="ru-file card">
              <div className="ru-file-icon">
                <div className="ru-file-rect" />
                <div className="ru-file-fold" />
              </div>
              <span className="ru-file-name">绩效考核表（范表）</span>
            </div>
            <div className="ru-file card">
              <div className="ru-file-icon">
                <div className="ru-file-rect" />
                <div className="ru-file-fold" />
              </div>
              <span className="ru-file-name">项目奖金表（范表）</span>
            </div>
          </div>
          <p className="ru-file-hint">公告内下载</p>
        </div>
      )}

      {/* ── Step 4: CTA + Company stamp ── */}
      {step === 4 && (
        <div className="ru-frame ru-frame--center">
          <p className="ru-cta">有疑问找 HR</p>
          <div className="ru-stamp">
            <span className="ru-stamp-company">厦门砾丰科技有限公司</span>
            <span className="ru-stamp-year">2026 年度</span>
          </div>
        </div>
      )}
    </div>
  );
}
