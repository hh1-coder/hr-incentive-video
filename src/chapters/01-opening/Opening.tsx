import type { ChapterStepProps } from "../../registry/types";
import "./Opening.css";

export default function Opening({ step }: ChapterStepProps) {
  return (
    <div className="op-scene">
      {/* Persistent background — geometric shapes drift across the stage */}
      <div className="op-bg" data-step={step}>
        <div className="op-blob op-blob--a" />
        <div className="op-blob op-blob--b" />
        <div className="op-blob op-blob--c" />
      </div>

      {/* ── Step 0: Hook title ── */}
      {step === 0 && (
        <div className="op-frame op-frame--center">
          <p className="op-hero">
            <span className="op-hero-line">公司出了份新考核方案</span>
            <span className="op-hero-sub">现在先试运行</span>
          </p>
          <p className="op-tag">技术研发中心 · 绩效考核及激励方案</p>
        </div>
      )}

      {/* ── Step 1: Key reassurance ── */}
      {step === 1 && (
        <div className="op-frame op-frame--center">
          <p className="op-hero op-hero--ghost">
            <span className="op-hero-line">公司出了份新考核方案</span>
            <span className="op-hero-sub">现在先试运行</span>
          </p>
          <div className="op-kicker">
            <p className="op-big">工资暂时不变</p>
            <p className="op-mid">但你的表现，会开始被记录</p>
          </div>
          <p className="op-tag">技术研发中心 · 绩效考核及激励方案</p>
        </div>
      )}

      {/* ── Step 2: The stakes + transition ── */}
      {step === 2 && (
        <div className="op-frame op-frame--center">
          <p className="op-emphasis">
            <span className="op-emphasis-pre">等试行结束正式生效后</span>
            <span className="op-emphasis-big">
              钱<span className="op-emphasis-accent">，</span>才跟着走
            </span>
          </p>
          <p className="op-bridge">所以现在就得搞清楚</p>
        </div>
      )}

      {/* ── Step 3: Three cards stagger in at once ── */}
      {step === 3 && (
        <div className="op-frame op-frame--cards">
          <h2 className="op-section-title">三笔钱</h2>
          <div className="op-cards">
            <div className="op-card card">
              <div className="op-card-icon op-card-icon--coin" />
              <p className="op-card-label">绩效奖金</p>
              <p className="op-card-hint">每月发</p>
            </div>
            <div className="op-card card">
              <div className="op-card-icon op-card-icon--box" />
              <p className="op-card-label">项目奖金</p>
              <p className="op-card-hint">项目结束发</p>
            </div>
            <div className="op-card card">
              <div className="op-card-icon op-card-icon--star" />
              <p className="op-card-label">储备人才津贴</p>
              <p className="op-card-hint">够格就发</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 4: Bridge text ── */}
      {step === 4 && (
        <div className="op-frame op-frame--cards">
          <h2 className="op-section-title">三笔钱</h2>
          <div className="op-cards">
            <div className="op-card card">
              <div className="op-card-icon op-card-icon--coin" />
              <p className="op-card-label">绩效奖金</p>
              <p className="op-card-hint">每月发</p>
            </div>
            <div className="op-card card">
              <div className="op-card-icon op-card-icon--box" />
              <p className="op-card-label">项目奖金</p>
              <p className="op-card-hint">项目结束发</p>
            </div>
            <div className="op-card card">
              <div className="op-card-icon op-card-icon--star" />
              <p className="op-card-label">储备人才津贴</p>
              <p className="op-card-hint">够格就发</p>
            </div>
          </div>
          <p className="op-bridge">三笔钱，三个触发时机</p>
        </div>
      )}
    </div>
  );
}
