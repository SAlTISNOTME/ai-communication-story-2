import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'What Influences AI Acceptance in Corporate Communications?',
  description: '什么因素在影响企业中的AI接受度？An interactive research story based on semi-structured interviews with 19 German communication experts.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hans"><body>{children}</body></html>;
}
