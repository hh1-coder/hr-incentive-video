import type { ChapterDef } from "./types";
import OpeningChapter from "../chapters/01-opening/Opening";
import { narrations as openingNarrations } from "../chapters/01-opening/narrations";
import PerformanceChapter from "../chapters/02-performance/Performance";
import { narrations as performanceNarrations } from "../chapters/02-performance/narrations";
import ProjectChapter from "../chapters/03-project/Project";
import { narrations as projectNarrations } from "../chapters/03-project/narrations";
import TalentChapter from "../chapters/04-talent/Talent";
import { narrations as talentNarrations } from "../chapters/04-talent/narrations";
import RulesChapter from "../chapters/05-rules/Rules";
import { narrations as rulesNarrations } from "../chapters/05-rules/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names. See THEMES.md.
 */
export const CHAPTERS: ChapterDef[] = [
  {
    id: "opening",
    title: "开场 + 三笔钱总览",
    narrations: openingNarrations,
    Component: OpeningChapter,
  },
  {
    id: "performance",
    title: "绩效奖金详解",
    narrations: performanceNarrations,
    Component: PerformanceChapter,
  },
  {
    id: "project",
    title: "项目奖金拆解",
    narrations: projectNarrations,
    Component: ProjectChapter,
  },
  {
    id: "talent",
    title: "储备人才津贴",
    narrations: talentNarrations,
    Component: TalentChapter,
  },
  {
    id: "rules",
    title: "须知与生效",
    narrations: rulesNarrations,
    Component: RulesChapter,
  },
];
