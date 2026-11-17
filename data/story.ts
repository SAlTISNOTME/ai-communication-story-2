export type Language = 'en' | 'zh';

export type Factor = { en: string; zh: string };
export type Quote = { who: string; en: string; zh: string };

export const factors: Factor[] = [
  { en: 'Sociodemographic factors (age)', zh: '社会人口因素（年龄）' },
  { en: 'Personal experiences and active use', zh: '个人主动使用' },
  { en: 'Emotional engagement with technology', zh: '情感投入' },
  { en: 'Subjective norms rooted in convenient solutions and personal beliefs', zh: '主观规范' },
  { en: 'Trust', zh: '信任' },
  { en: 'Organizational culture', zh: '组织文化' },
  { en: "Leaders' stance toward AI adoption", zh: '领导者对AI采纳的态度' },
  { en: 'Transparency in adoption and operationalization', zh: 'AI工具采纳与运行的透明度' },
  { en: 'Ethical considerations (voluntary usage and equitable functionality)', zh: '伦理考量（自愿使用和公平性）' },
  { en: 'Accountability measures', zh: '问责措施' },
  { en: 'Tool accessibility', zh: '工具可及性' },
  { en: 'Cost considerations', zh: '成本可行性' },
  { en: 'Comprehensive training', zh: '系统的培训' },
];

// Correct classification per the research model figure:
// micro = first 5 factors; meso / awareness = 6-9; meso / frameworks = 10-13.
export const factorZones = [
  { zone: 'micro', indexes: [0, 1, 2, 3, 4] },
  { zone: 'aware', indexes: [5, 6, 7, 8] },
  { zone: 'frame', indexes: [9, 10, 11, 12] },
] as const;

export const interviewees = [
  { id: 'E1', group: 'consultancy', company: 'UNICEPTA', gender: 'F' },
  { id: 'E2', group: 'developer', company: 'IBM Germany', gender: 'F' },
  { id: 'E3', group: 'developer', company: 'Robert Bosch', gender: 'M' },
  { id: 'E4', group: 'consultancy', company: 'AITASTIC Research & Consult', gender: 'M' },
  { id: 'E5', group: 'developer', company: 'Microsoft Corporation', gender: 'M' },
  { id: 'E6', group: 'developer', company: 'Deutsche Telekom Business Solutions', gender: 'M' },
  { id: 'E7', group: 'user', company: 'Schott', gender: 'F' },
  { id: 'E8', group: 'consultancy', company: 'Anonymous Agency', gender: 'F' },
  { id: 'E9', group: 'developer', company: 'GfK', gender: 'F' },
  { id: 'E10', group: 'user', company: 'PricewaterhouseCoopers', gender: 'M' },
  { id: 'E11', group: 'user', company: 'Anonymous Software Company', gender: 'M' },
  { id: 'E12', group: 'user', company: 'pressrelations', gender: 'M' },
  { id: 'E13', group: 'user', company: 'Audi', gender: 'M' },
  { id: 'E14', group: 'developer', company: 'Palantir Technologies', gender: 'M' },
  { id: 'E15', group: 'consultancy', company: 'CISION', gender: 'M' },
  { id: 'E16', group: 'user', company: 'Fraport', gender: 'M' },
  { id: 'E17', group: 'developer', company: 'eBay Germany', gender: 'M' },
  { id: 'E18', group: 'developer', company: 'Anonymous online shop', gender: 'F' },
  { id: 'E19', group: 'developer', company: 'Siemens', gender: 'F' },
];

export const potential = [
  {
    en: 'Public relations', zh: '公共关系领域',
    bodyEn: 'AI tools harbor extreme potential in much more targeted communication — from monitoring and sentiment analysis to fully automated or partly supervised workflows.',
    bodyZh: 'AI工具蕴含“在更加精准的传播方面的巨大潜力”——可用于监测与分析工具、情感分析，从完全自动化到需要部分人工监督不等。',
    quote: { who: 'E4', en: 'AI tools harbor extreme potential in much more targeted communication.', zh: 'AI工具蕴含“在更加精准的传播方面的巨大潜力”。' },
  },
  {
    en: 'Strategic decision-making', zh: '传播部门内部的战略决策过程',
    bodyEn: 'AI algorithms can suggest communication strategies based on historical data, and oversee the effectiveness of executed communication strategies.',
    bodyZh: 'AI算法可以基于历史数据提出传播策略建议，“为决策框架提供帮助”，并在监督已执行策略的成效方面发挥关键作用。',
    quote: { who: 'E19', en: 'AI algorithms can suggest communication strategies based on historical data, thus helping with the decision-making framework.', zh: 'AI算法可以基于历史数据提出传播策略建议，从而“为决策框架提供帮助”。' },
  },
  {
    en: 'Content creation & management', zh: '面向传播渠道的内容创作与管理',
    bodyEn: 'From text mining and data preprocessing to assistance bots for internal employee support and external customer communication.',
    bodyZh: '从文本挖掘与数据预处理，到为内部支持和外部客户传播设计的机器人助手。',
    quote: null,
  },
];

export const micro = [
  {
    en: 'Sociodemographic factors (age)', zh: '社会人口因素（年龄）',
    bodyEn: 'Age is a significant dividing line, supporting the notion of an “AI divide”.',
    bodyZh: '年龄是显著的分界线，为“AI鸿沟”（AI divide）的概念提供支持。',
    quote: null,
  },
  {
    en: 'Personal experiences with and active use', zh: '与AI的个人接触和主动使用',
    bodyEn: 'A key determinant of acceptance that eases the transition to routine use of AI tools.',
    bodyZh: '促进接受倾向的关键决定因素，有助于更平稳地过渡到对AI工具的常规使用。',
    quote: { who: 'E11', en: 'The perception of the benefits is also shaped by the first use of the technology—regardless of whether the result and its quality are received euphorically or viewed critically.', zh: '对技术收益的感知也受到初次使用的影响——无论结果是令人振奋还是受到批评。' },
  },
  {
    en: 'Trust', zh: '信任',
    bodyEn: 'Trust is the cornerstone of AI acceptance at the individual level.',
    bodyZh: '信任是影响个体层面AI接受度的基石。',
    quote: null,
  },
  {
    en: 'Emotional engagement with technology', zh: '情感投入',
    bodyEn: 'Emotional engagement with technology is deeply linked to one’s overall attitude toward using it.',
    bodyZh: '用户与技术之间的情感投入与其对技术使用的总体态度之间存在深刻关联。',
    quote: { who: 'E7', en: 'The notion of deriving an “emotional benefit”.', zh: '从AI使用中获得的“情感收益”会提升接受度。' },
  },
  {
    en: 'Subjective norms', zh: '主观规范',
    bodyEn: 'Subjective norms rooted in convenient solutions and personal beliefs shape the disposition to adopt new technology.',
    bodyZh: '植根于便利方案与个人信念的主观规范会影响个体采纳新技术的倾向。',
    quote: { who: 'E19', en: 'AI gives you so much power to make greater, smarter decisions faster. And I am really looking forward to continuing like build that framework and really empower and educate our colleagues about how much power they have and exactly how much data they can access.', zh: 'AI赋予你巨大的力量，让你更快地做出更出色、更明智的决策。我非常期待继续构建这个框架，真正赋能并教育我们的同事，让他们知道自己拥有多大的力量、可以获取多少数据。' },
  },
];

export const meso = [
  {
    groupEn: 'Organizational awareness', groupZh: '组织认知',
    items: [
      {
        en: 'Organizational culture & leaders’ stance', zh: '组织文化与领导者对AI采纳的态度',
        bodyEn: 'Culture and leadership are major drivers of acceptance.',
        bodyZh: '组织文化以及领导者对AI采纳的态度是接受度的重要驱动因素。',
        quote: { who: 'E2', en: 'Executives who embody proactive AI use, effectively “through leading by example”, not only demonstrate the tangible benefits of these technologies but also actively cultivate an environment conducive to acceptance among the workforces.', zh: '那些以身示范、主动使用AI的高管，实际上是在“以身作则”。他们不仅展示了这些技术的切实收益，还积极营造有利于员工接受的环境。' },
      },
      {
        en: 'Transparency in adoption and operationalization', zh: 'AI工具采纳与运行的透明度',
        bodyEn: 'The transparency of AI tool adoption and operation is often considered crucial. Involving users through comprehensive education and training consolidates acceptance.',
        bodyZh: 'AI工具的采纳与运行的透明度也常被认为是至关重要的。通过全面的教育与培训让用户参与技术之旅，可以巩固接受度。',
        quote: { who: 'E8', en: 'Openness, the cornerstone of our approach, is paramount, ensuring that users are well-informed and adequately prepared for the transition to AI-enhanced workflows.', zh: '这种开放性是“我们方法的基石”，它确保用户充分知情并为向AI增强型工作流的过渡做好充分准备。' },
      },
      {
        en: 'Ethical considerations', zh: '伦理考量（自愿使用和公平性）',
        bodyEn: 'Ethical considerations—especially voluntary usage and equitable functionality of AI tools—are crucial. Mandated usage breeds resistance; principled governance cultivates a culture of accountability and ethics.',
        bodyZh: '伦理考量，尤其是自愿使用以及AI工具功能的公平性至关重要。强制使用技术可能引发抵触，有原则的治理才能培育问责制与伦理操守的文化。',
        quote: { who: 'E7', en: 'We don’t have a bias and don’t run the risk of things going in a bad direction. We need that, and it makes it easier for our teams to have very clear guidelines and to know in which direction things should go. And then, in cases of doubt, they also know whom they can turn to if it could be ethically questionable.', zh: '这样我们才不会有偏见，才不会冒事情走偏的风险。我们需要这个，它让我们的团队更容易拥有非常清晰的指引，知道事情应该往哪个方向走。而且在有疑问的情况下，他们也知道可以找谁咨询伦理上可能存在问题的事。' },
      },
    ],
  },
  {
    groupEn: 'Organizational frameworks', groupZh: '组织框架',
    items: [
      { en: 'Accountability measures', zh: '问责措施', bodyEn: '', bodyZh: '', quote: null },
      { en: 'Accessibility of tools', zh: '工具可及性', bodyEn: '', bodyZh: '', quote: null },
      { en: 'Cost-effectiveness', zh: '成本可行性', bodyEn: '', bodyZh: '', quote: null },
      { en: 'Comprehensive training', zh: '系统的培训', bodyEn: '', bodyZh: '', quote: null },
    ],
  },
];

export const consensus = [
  { who: 'E8', en: 'It will never happen that corporate communication is no longer needed.', zh: '“企业传播不再被需要的情况永远不会发生”。' },
  { who: 'E5', en: 'The nature of work tasks will evolve. We will spend a lot more time really thinking about ethical and moral or strategic elements and perhaps spend less time in these operational functions.', zh: '“工作任务的性质将会演变。我们会把更多时间真正用于思考伦理、道德或战略层面的问题，而更少花在那些可以被AI自动化的操作性职能上”。' },
  { who: 'E11', en: 'We are more likely to become mediators, moderators and fact checkers, quality checkers, or AI moderators.', zh: '“传播部门更可能成为协调者、主持人、事实核查者、质量核查者……或者说AI协调员”。' },
];
