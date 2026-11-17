'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, GripVertical } from 'lucide-react';
import { useRef, useState } from 'react';
import { factors, interviewees, potential, micro, meso, consensus, type Language } from '@/data/story';

const T = {
  en: {
    kicker: 'COMMUNICATION × ARTIFICIAL INTELLIGENCE',
    first: 'WHAT DRIVES', firstB: 'AI ACCEPTANCE',
    second: 'IN CORPORATE', secondB: 'COMMUNICATIONS?',
    heroZh: '什么因素在影响企业中的AI接受度？',
    study: 'A QUALITATIVE STUDY', experts: 'GERMAN COMMUNICATION EXPERTS',
    scroll: 'SCROLL TO EXPLORE',
    factorsSection: 'THE FACTOR FIELD', factorsHint: 'Drag the blocks around — every factor matters.',
    factorGoal: 'Drag each block into the dashed frame it belongs to. Once all 13 are placed, tap the button to reveal the correct answer.',
    zoneMicro: 'MICRO · INDIVIDUAL', zoneMeso: 'MESO · ORGANIZATIONAL', zoneAware: 'Organizational awareness', zoneFrame: 'Organizational frameworks',
    factorReset: 'Reset', factorChecking: 'placed',
    answerBtn: 'SHOW THE ANSWER', answerClose: 'Close',
    answerTitle: 'THE MODEL’S ANSWER', answerNote: 'Perceived usefulness and perceived ease of use (yellow) complete the micro level in the research model.',
    answerRight: 'Correct', answerWrong: 'Should be here',
    methodSection: 'METHOD', methodTitle: 'QUALITATIVE', methodEm: 'RESEARCH.',
    methodSummary: 'Semi-structured interviews with', methodEnding: 'communication experts from large-scale companies and consultancies in Germany.',
    tableSection: 'INTERVIEWEES', tableHint: 'Floating danmaku — colour marks the group, symbol marks gender.',
    dmSwitchHint: 'Tap the buttons below to switch between groups.',
    rqSection: 'RESEARCH QUESTIONS · 研究问题',
    rqs: ['How is AI acceptance in corporate communications impacted by (a) micro- and (b) meso-level determinants in large-scale companies in Germany?', 'How is the AI-related transformation of corporate communications perceived by large-scale companies in Germany?'],
    potSection: 'TRANSFORMATIVE POTENTIAL',
    microSection: 'MICRO-LEVEL DETERMINANTS', microEm: 'DETERMINANTS.', microLede: 'The following factors impact individuals’ disposition toward AI adoption. Tap a factor to reveal the voices behind it.',
    mesoSection: 'MESO-LEVEL DETERMINANTS',
    quizSection: 'YOUR CALL', quizTitle: 'MORE IMPORTANT', quizEm: 'OR LESS?', quizQ: 'Will the corporate communication function become more important or less?', quizHint: 'Drag the badge — up or right means “more important”.', quizRight: 'Correct — that is the consensus of the study.', quizWrong: 'Think again — the experts agree it will not become less important.', quizReset: 'Try again',
    whyTitle: 'WHY?', consensusLede: 'Corporate communications will not become less important because of AI.',
    outroQuote: '“The more advanced the technology becomes, the more crucial the complementary role—that is, the human element—grows.”',
    outroWho: 'E14', outroBody: 'In the age of AI, corporate communication is a reshaping of roles under human–machine symbiosis: the higher the efficiency, the more humans are needed to safeguard authenticity, ethics and strategic judgment.',
    footer: 'AI ACCEPTANCE IN CORPORATE COMMUNICATIONS',
    groups: { consultancy: 'Consultancy', developer: 'Developer', user: 'User' } as Record<string, string>,
  },
  zh: {
    kicker: '传播 × 人工智能',
    first: '什么因素', firstB: '在影响',
    second: '企业传播中的', secondB: 'AI接受度？',
    heroZh: 'WHAT INFLUENCES AI ACCEPTANCE IN CORPORATE COMMUNICATIONS?',
    study: '质性研究', experts: '德国传播专家',
    scroll: '下滑探索',
    factorsSection: '因素场', factorsHint: '拖动方块——每一个因素都在影响接受度。',
    factorGoal: '把每个方块拖进它所属的虚线框。13 块全部放好后，点击按钮揭示「正确答案」。',
    zoneMicro: '微观个体层面', zoneMeso: '中观组织层面', zoneAware: '组织认知', zoneFrame: '组织框架',
    factorReset: '重置', factorChecking: '已放入',
    answerBtn: '正确答案', answerClose: '关闭',
    answerTitle: '正确答案', answerNote: '黄色两块「感知有用性」「感知易用性」是研究模型中微观层面的补充因素。',
    answerRight: '正确', answerWrong: '应放入此处',
    methodSection: '研究方法', methodTitle: '质性', methodEm: '调研.',
    methodSummary: '对', methodEnding: '名德国大型企业和咨询公司的传播专家开展半结构化访谈。',
    tableSection: '访谈对象', tableHint: '弹幕浮动——颜色代表所属群体，符号代表性别。',
    dmSwitchHint: '点击下方按钮切换查看。',
    rqSection: 'RESEARCH QUESTIONS · 研究问题',
    rqs: ['（德国）企业传播的AI接受度如何受到微观层面与中观层面决定因素的影响？', '（德国）大型企业如何感知AI给企业传播带来的相关转型？'],
    potSection: '变革潜力',
    microSection: '微观层面因素', microEm: '因素.', microLede: '以下因素会影响个体采纳新技术的倾向。点击展开因素背后的专家之声。',
    mesoSection: '中观层面因素',
    quizSection: '你来判断', quizTitle: '重要性', quizEm: '提升还是下降？', quizQ: 'AI时代，企业中传播部门的重要性会提升还是下降？', quizHint: '拖动徽章——向上或向右代表“提升”。', quizRight: '答对了——这正是研究中的共识。', quizWrong: '再想想——专家们的共识是传播部门不会变得不重要。', quizReset: '再试一次',
    whyTitle: '为什么？', consensusLede: '研究中受访者的共识是：企业传播不会因AI变得不重要。',
    outroQuote: '“技术越先进，与之互补的角色——也就是人的因素——就越关键。”',
    outroWho: 'E14', outroBody: 'AI时代的企业传播，是人机共生下的角色重塑；效率越高，越需要人把关真实性、伦理与战略判断。',
    footer: '企业传播中的AI接受度',
    groups: { consultancy: '咨询机构', developer: '开发者', user: '用户' } as Record<string, string>,
  },
};

const groupClass: Record<string, string> = { consultancy: 'dm-consultancy', developer: 'dm-developer', user: 'dm-user' };

function Hero({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const c = T[lang];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.2]);
  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <header className="topbar">
        <a href="#top" className="wordmark">FIELDNOTES<span> / 02</span></a>
        <div className="topbar-actions">
          <a href="#factors" className="top-link">{c.factorsSection} <ArrowUpRight size={14} /></a>
          <div className="language-toggle" role="group" aria-label="Language">
            <button type="button" aria-pressed={lang === 'zh'} onClick={() => setLang('zh')}>CN</button>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </header>
      <motion.div className="hero-content" style={{ scale, opacity }}>
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .2 }}>{c.kicker}</motion.p>
        <h1 id="hero-title" key={lang} className={lang === 'zh' ? 'hero-title-zh' : undefined}>
          <span className="title-line"><motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .8, ease: [.22, 1, .36, 1], delay: .28 }}>{c.first}</motion.span><i>{c.firstB}</i></span>
          <span className="title-line title-second"><motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .8, ease: [.22, 1, .36, 1], delay: .43 }}>{c.second}</motion.span><b><motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .8, ease: [.22, 1, .36, 1], delay: .56 }}>{c.secondB}</motion.span></b></span>
        </h1>
        <div className="hero-foot">
          <div>
            <p className="hero-subtitle">{lang === 'zh' ? <>企业传播中的<br />人工智能接受度</> : <>Artificial Intelligence<br />Acceptance in Corporate Communications</>}</p>
            <p className="hero-cn">{c.heroZh}</p>
          </div>
          <div className="hero-study"><span className="lime-dot" /> {c.study}<br />N = 19 · {c.experts}</div>
        </div>
      </motion.div>
      <a className="scroll-cue" href="#factors"><span>{c.scroll}</span><ArrowDown size={16} /></a>
      <div className="hero-index">01 — 09</div>
    </section>
  );
}

function FactorField({ lang }: { lang: Language }) {
  const c = T[lang];
  const box = useRef<HTMLDivElement>(null);
  const microRef = useRef<HTMLDivElement>(null);
  const awareRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [placed, setPlaced] = useState<Record<number, 'micro' | 'aware' | 'frame'>>({});
  const [showAnswer, setShowAnswer] = useState(false);
  const zoneRefs = { micro: microRef, aware: awareRef, frame: frameRef } as const;
  const allPlaced = Object.keys(placed).length === factors.length;
  const zoneOf = (i: number) => (placed[i] ?? null) as 'micro' | 'aware' | 'frame' | null;
  const handleDrop = (i: number, event: PointerEvent | MouseEvent | TouchEvent, info: { point: { x: number; y: number } }) => {
    const cx = info.point.x;
    const cy = info.point.y;
    for (const zone of ['micro', 'aware', 'frame'] as const) {
      const el = zoneRefs[zone].current;
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom) {
        setPlaced((p) => ({ ...p, [i]: zone }));
        return;
      }
    }
  };
  const correctZone = (i: number): 'micro' | 'aware' | 'frame' => (i <= 4 ? 'micro' : i <= 8 ? 'aware' : 'frame');
  const Chip = ({ i, draggable }: { i: number; draggable: boolean }) => {
    const f = factors[i];
    const zone = zoneOf(i);
    const isWrong = allPlaced && zone !== null && zone !== correctZone(i);
    return (
      <motion.div
        className={`factor-chip ${zone ? 'is-placed' : ''} ${allPlaced && zone ? (isWrong ? 'is-wrong' : 'is-right') : ''}`}
        drag={draggable}
        dragConstraints={box}
        dragElastic={0.18}
        whileDrag={draggable ? { scale: 1.06, zIndex: 30 } : undefined}
        whileHover={draggable ? { scale: 1.03 } : undefined}
        onDragEnd={draggable ? (event, info) => handleDrop(i, event, info) : undefined}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .3 }}
        transition={{ delay: draggable ? (i % 6) * .05 : 0, duration: .5 }}>
        <GripVertical size={13} /><span>{lang === 'zh' ? f.zh : f.en}</span><b>{String(i + 1).padStart(2, '0')}</b>
      </motion.div>
    );
  };
  return (
    <section id="factors" className="story-section factor-section" aria-labelledby="factor-title">
      <p className="eyebrow"><span className="section-number">01</span> / {c.factorsSection}</p>
      <h2 id="factor-title" className={lang === 'zh' ? 'zh-title' : undefined}>{lang === 'zh' ? <>影响接受度的<br /><em>十三块拼图。</em></> : <>THE <em>FACTOR</em><br />FIELD.</>}</h2>
      <p className="section-lede">{c.factorsHint}</p>
      <div className="factor-pool">
        {factors.map((f, i) => !zoneOf(i) && <Chip key={f.en} i={i} draggable />)}
        {Object.keys(placed).length > 0 && !allPlaced && <span className="factor-count">{Object.keys(placed).length} / 13 {c.factorChecking}</span>}
        {Object.keys(placed).length > 0 && <button type="button" className="factor-reset" onClick={() => setPlaced({})}>{c.factorReset}</button>}
        <button type="button" className="factor-reset answer-toggle" onClick={() => setShowAnswer(true)}>{c.answerBtn}</button>
      </div>
      <p className="factor-goal">{c.factorGoal}</p>
      <div className="factor-field" ref={box}>
        <div className={`drop-zone zone-micro ${allPlaced ? 'is-judged' : ''}`} ref={microRef}>
          <span className="zone-label">{c.zoneMicro}</span>
          <div className="zone-chips">{factors.map((f, i) => zoneOf(i) === 'micro' && <Chip key={f.en} i={i} draggable={false} />)}</div>
        </div>
        <div className={`drop-zone zone-meso ${allPlaced ? 'is-judged' : ''}`}>
          <span className="zone-label">{c.zoneMeso}</span>
          <div className="meso-subzones">
            <div className="drop-zone-subzone" ref={awareRef}>
              <span className="zone-sublabel">{c.zoneAware}</span>
              <div className="zone-chips">{factors.map((f, i) => zoneOf(i) === 'aware' && <Chip key={f.en} i={i} draggable={false} />)}</div>
            </div>
            <div className="drop-zone-subzone" ref={frameRef}>
              <span className="zone-sublabel">{c.zoneFrame}</span>
              <div className="zone-chips">{factors.map((f, i) => zoneOf(i) === 'frame' && <Chip key={f.en} i={i} draggable={false} />)}</div>
            </div>
          </div>
        </div>
      </div>
      {showAnswer && (
        <motion.div className="answer-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }} onClick={() => setShowAnswer(false)}>
          <motion.div className="answer-sheet" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }} onClick={(e) => e.stopPropagation()}>
            <div className="answer-sheet-head"><h3>{c.answerTitle}</h3><button type="button" className="factor-reset" onClick={() => setShowAnswer(false)}>{c.answerClose} ✕</button></div>
            <div className="answer-diagram">
              <div className="drop-zone zone-micro">
                <span className="zone-label">{c.zoneMicro}</span>
                <div className="zone-chips">
                  {factors.slice(0, 5).map((f, i) => <span key={f.en} className="answer-chip answer-teal">{lang === 'zh' ? f.zh : f.en}</span>)}
                </div>
              </div>
              <div className="drop-zone zone-meso">
                <span className="zone-label">{c.zoneMeso}</span>
                <div className="meso-subzones">
                  <div className="drop-zone-subzone">
                    <span className="zone-sublabel">{c.zoneAware}</span>
                    <div className="zone-chips">{factors.slice(5, 9).map((f) => <span key={f.en} className="answer-chip answer-teal">{lang === 'zh' ? f.zh : f.en}</span>)}</div>
                  </div>
                  <div className="drop-zone-subzone">
                    <span className="zone-sublabel">{c.zoneFrame}</span>
                    <div className="zone-chips">{factors.slice(9).map((f) => <span key={f.en} className="answer-chip answer-teal">{lang === 'zh' ? f.zh : f.en}</span>)}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function Method({ lang }: { lang: Language }) {
  const c = T[lang];
  return (
    <section className="research-design" aria-labelledby="method-title">
      <div className="design-heading">
        <p className="eyebrow"><span className="section-number">02</span> / {c.methodSection}</p>
        <h2 id="method-title">{c.methodTitle}<br /><em>{c.methodEm}</em></h2>
        <p className="design-summary">{c.methodSummary} <strong>19</strong> {c.methodEnding}</p>
      </div>
    </section>
  );
}

function Danmaku({ lang }: { lang: Language }) {
  const c = T[lang];
  const rows = 7;
  const [filter, setFilter] = useState<'all' | 'consultancy' | 'developer' | 'user'>('all');
  const visible = interviewees.filter((p) => filter === 'all' || p.group === filter);
  const toggle = (group: 'consultancy' | 'developer' | 'user') => setFilter((f) => (f === group ? 'all' : group));
  return (
    <section className="story-section danmaku-section" aria-labelledby="dm-title">
      <p className="eyebrow"><span className="section-number">03</span> / {c.tableSection}</p>
      <h2 id="dm-title" className={lang === 'zh' ? 'zh-title' : undefined}>{lang === 'zh' ? <>19位专家，<br /><em>三色弹幕。</em></> : <>NINETEEN <em>VOICES.</em></>}</h2>
      <p className="section-lede">{c.tableHint}</p>
      <p className="dm-switch-hint">{c.dmSwitchHint}</p>
      <div className="danmaku-stage" aria-label={c.tableHint}>
        {visible.map((p, i) => (
          <div key={p.id} className={`danmaku ${groupClass[p.group]}`} style={{ top: `${(i % rows) * (100 / rows) + 3}%`, animationDuration: `${26 + (i % 5) * 6}s`, animationDelay: `${-i * 3.4}s` }}>
            <span className="dm-gender">{p.gender === 'F' ? '♀' : '♂'}</span>
            <b>{p.id}</b> {c.groups[p.group]} · {p.company}
          </div>
        ))}
      </div>
      <div className="dm-legend">
        <button type="button" className={`dm-consultancy ${filter === 'consultancy' ? 'is-active' : ''} ${filter !== 'all' && filter !== 'consultancy' ? 'is-dim' : ''}`} aria-pressed={filter === 'consultancy'} onClick={() => toggle('consultancy')}>{c.groups.consultancy}</button>
        <button type="button" className={`dm-developer ${filter === 'developer' ? 'is-active' : ''} ${filter !== 'all' && filter !== 'developer' ? 'is-dim' : ''}`} aria-pressed={filter === 'developer'} onClick={() => toggle('developer')}>{c.groups.developer}</button>
        <button type="button" className={`dm-user ${filter === 'user' ? 'is-active' : ''} ${filter !== 'all' && filter !== 'user' ? 'is-dim' : ''}`} aria-pressed={filter === 'user'} onClick={() => toggle('user')}>{c.groups.user}</button>
      </div>
    </section>
  );
}

function ResearchQuestions({ lang }: { lang: Language }) {
  const c = T[lang];
  return (
    <section className="research-questions" aria-label={c.rqSection}>
      <p className="eyebrow"><span className="section-number">03</span> / {c.rqSection}</p>
      <div className="rq-list">
        {c.rqs.map((q, i) => <article className="research-question" key={i}><span className="rq-id">RQ{i + 1}</span><p>{q}</p><span className="rq-index">0{i + 1}</span></article>)}
      </div>
    </section>
  );
}

function Potential({ lang }: { lang: Language }) {
  const c = T[lang];
  return (
    <section className="story-section potential-section" aria-labelledby="pot-title">
      <p className="eyebrow"><span className="section-number">04</span> / {c.potSection}</p>
      <h2 id="pot-title" className={lang === 'zh' ? 'zh-title' : undefined}>{lang === 'zh' ? <>AI对企业传播的<br /><em>变革潜力。</em></> : <>WHERE AI <em>RESHAPES</em><br />COMMUNICATIONS.</>}</h2>
      <div className="potential-grid">
        {potential.map((p, i) => (
          <motion.article key={p.en} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: i * .1, duration: .55 }}>
            <span className="pot-index">0{i + 1}</span>
            <h3>{lang === 'zh' ? p.zh : p.en}</h3>
            <p>{lang === 'zh' ? p.bodyZh : p.bodyEn}</p>
            {p.quote && <blockquote><b>{p.quote.who}</b> {lang === 'zh' ? p.quote.zh : p.quote.en}</blockquote>}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function VoiceList({ lang, items, groupKey, openKey, setOpenKey }: { lang: Language; items: readonly unknown[]; groupKey: string; openKey: string | null; setOpenKey: (v: string | null) => void }) {
  return (
    <ol className="voice-list">
      {items.map((raw, i) => {
        const item = raw as { en: string; zh: string; bodyEn?: string; bodyZh?: string; quote?: { who: string; en: string; zh: string } | null };
        const key = `${groupKey}-${i}`;
        const isOpen = openKey === key;
        return (
          <li key={item.en} className={isOpen ? 'is-open' : ''}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpenKey(isOpen ? null : key)}>
              <span className="voice-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="voice-label">{lang === 'zh' ? item.zh : item.en}</span>
              {item.quote ? <span className="voice-plus">{isOpen ? '−' : '+'}</span> : <span className="voice-none">·</span>}
            </button>
            {isOpen && (item.bodyEn || item.bodyZh || item.quote) && (
              <motion.div className="voice-body" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
                {(lang === 'zh' ? item.bodyZh : item.bodyEn) && <p>{lang === 'zh' ? item.bodyZh : item.bodyEn}</p>}
                {item.quote && <blockquote><b>{item.quote.who}</b> {lang === 'zh' ? item.quote.zh : item.quote.en}</blockquote>}
              </motion.div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Micro({ lang }: { lang: Language }) {
  const c = T[lang];
  const [openKey, setOpenKey] = useState<string | null>('micro-0');
  return (
    <section className="story-section voices-section" aria-labelledby="micro-title">
      <p className="eyebrow"><span className="section-number">05</span> / {c.microSection}</p>
      <h2 id="micro-title" className={lang === 'zh' ? 'zh-title' : undefined}>{lang === 'zh' ? <>微观层面<br /><em>因素。</em></> : <>MICRO-LEVEL <em>{c.microEm}</em></>}</h2>
      <p className="section-lede">{c.microLede}</p>
      <VoiceList lang={lang} items={micro} groupKey="micro" openKey={openKey} setOpenKey={setOpenKey} />
    </section>
  );
}

function Meso({ lang }: { lang: Language }) {
  const c = T[lang];
  const [openKey, setOpenKey] = useState<string | null>('0-0');
  return (
    <section className="story-section meso-section" aria-labelledby="meso-title">
      <p className="eyebrow"><span className="section-number">06</span> / {c.mesoSection}</p>
      <h2 id="meso-title" className={lang === 'zh' ? 'zh-title' : undefined}>{lang === 'zh' ? <>中观层面<br /><em>因素。</em></> : <>MESO-LEVEL <em>DETERMINANTS.</em></>}</h2>
      {meso.map((group, gi) => (
        <div key={group.groupEn} className="meso-group">
          <h3 className="meso-group-title"><span>0{gi + 1}</span>{lang === 'zh' ? group.groupZh : group.groupEn}</h3>
          <VoiceList lang={lang} items={group.items} groupKey={String(gi)} openKey={openKey} setOpenKey={setOpenKey} />
        </div>
      ))}
    </section>
  );
}

function DragQuiz({ lang }: { lang: Language }) {
  const c = T[lang];
  const [state, setState] = useState<'idle' | 'right' | 'wrong'>('idle');
  const [resetKey, setResetKey] = useState(0);
  return (
    <section className="story-section quiz-section drag-quiz" aria-labelledby="quiz-title">
      <p className="eyebrow"><span className="section-number">07</span> / {c.quizSection}</p>
      <h2 id="quiz-title" className={lang === 'zh' ? 'zh-title' : undefined}>{lang === 'zh' ? <>{c.quizTitle}<br /><em>{c.quizEm}</em></> : <>MORE IMPORTANT<br /><em>OR LESS?</em></>}</h2>
      <p className="section-lede">{c.quizQ}</p>
      <div className="drag-zone">
        <div className="drag-crosshair" aria-hidden="true"><span>↓ {lang === 'zh' ? '更不重要' : 'LESS IMPORTANT'}</span><span>{lang === 'zh' ? '更重要 ↑' : 'MORE IMPORTANT ↑'}</span></div>
        <motion.button key={resetKey} type="button" className="drag-badge" drag dragMomentum={false} dragElastic={0.35}
          whileDrag={{ scale: 1.08 }}
          onDragEnd={(_, info) => {
            if (info.offset.y < -70 || info.offset.x > 70) setState('right');
            else if (Math.abs(info.offset.y) > 24 || Math.abs(info.offset.x) > 24) setState('wrong');
          }}
          aria-label={c.quizQ}>
          {lang === 'zh' ? '企业传播' : 'CORPORATE COMM.'}<GripVertical size={14} />
        </motion.button>
      </div>
      <p className="quiz-hint">{c.quizHint}</p>
      {state !== 'idle' && (
        <div className={`quiz-result ${state}`} role="status">
          <span>{state === 'right' ? '✓' : '✗'}</span>
          <p>{state === 'right' ? c.quizRight : c.quizWrong}</p>
          {state === 'wrong' && <button type="button" onClick={() => { setState('idle'); setResetKey(k => k + 1); }}>{c.quizReset}</button>}
        </div>
      )}
    </section>
  );
}

function Consensus({ lang }: { lang: Language }) {
  const c = T[lang];
  return (
    <section className="story-section consensus-section" aria-labelledby="cons-title">
      <p className="eyebrow"><span className="section-number">08</span> / WHY</p>
      <h2 id="cons-title" className={lang === 'zh' ? 'zh-title' : undefined}>{lang === 'zh' ? <>受访者的<br /><em>共识。</em></> : <>THE <em>CONSENSUS.</em></>}</h2>
      <p className="section-lede">{c.consensusLede}</p>
      <div className="consensus-list">
        {consensus.map((q, i) => (
          <motion.blockquote key={q.who} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: i * .08, duration: .5 }}>
            <b>{q.who}</b><p>{lang === 'zh' ? q.zh : q.en}</p>
          </motion.blockquote>
        ))}
      </div>
      <div className="consensus-why">
        <h3>{c.whyTitle}</h3>
        <p>{lang === 'zh' ? <>AI优化了传播部门的工作流，传播人员日益聚焦于企业传播的伦理、道德或战略层面，而减少对可被AI工具自动化的任务的依赖。随着AI成为组织内新的利益相关者，传播部门被寄望于在AI应用与企业其他部门之间进行引导与斡旋，整个传播部门的角色将转变为一个<strong>AI监督机构</strong>。</> : <>AI optimizes the workflows of communication departments. Employees increasingly focus on the ethical, moral, and strategic aspects of corporate communication, relying less on tasks that can be automated by AI. Communication departments are envisioned to navigate and mediate the interactions between AI applications and other facets of the enterprise, becoming an <strong>AI oversight authority</strong>.</>}</p>
      </div>
    </section>
  );
}

function Outro({ lang }: { lang: Language }) {
  const c = T[lang];
  return (
    <section className="story-section outro-section" aria-labelledby="outro-title">
      <h2 id="outro-title" className={lang === 'zh' ? 'zh-title' : undefined}>{lang === 'zh' ? <>AI不会<br /><em>取代</em>人类.</> : <>AI WON’T <em>REPLACE</em><br />HUMANS.</>}</h2>
      <blockquote className="outro-quote">
        <p>{c.outroQuote}</p>
        <b>{c.outroWho}</b>
      </blockquote>
      <p className="outro-body">{c.outroBody}</p>
    </section>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>('zh');
  const c = T[lang];
  return (
    <main id="top" lang={lang === 'zh' ? 'zh-Hans' : 'en'}>
      <Hero lang={lang} setLang={setLang} />
      <FactorField lang={lang} />
      <Method lang={lang} />
      <Danmaku lang={lang} />
      <ResearchQuestions lang={lang} />
      <Potential lang={lang} />
      <Micro lang={lang} />
      <Meso lang={lang} />
      <DragQuiz lang={lang} />
      <Consensus lang={lang} />
      <Outro lang={lang} />
      <footer className="site-footer"><span>FIELDNOTES / {c.footer}</span><span>QUALITATIVE INTERVIEW STUDY · N = 19 · GERMANY</span></footer>
    </main>
  );
}
