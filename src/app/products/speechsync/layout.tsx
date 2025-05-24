import type { Metadata } from 'next';

const SITE_TITLE = "SpeechSync AAC | Empowering Communication for All | by The Speech Clinic Dubai";
const SITE_DESCRIPTION = "Discover SpeechSync, the AAC app developed by The Speech Clinic Dubai to support non-verbal and speech-delayed individuals. Designed for children, teens, and therapists to simplify and enhance communication across devices.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: { title: SITE_TITLE, description: SITE_DESCRIPTION },
  twitter: { title: SITE_TITLE, description: SITE_DESCRIPTION }
};

export default function SpeechSyncLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 