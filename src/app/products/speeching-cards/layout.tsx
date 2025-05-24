import type { Metadata } from 'next';

const SITE_TITLE = "Speeching Cards | Interactive Learning Cards | by The Speech Clinic Dubai";
const SITE_DESCRIPTION = "Engage children in effective speech therapy with Speeching Cards from The Speech Clinic Dubai. Interactive, visual-based cards designed by experts to make speech and language development fun and impactful.";

export const metadata: Metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    openGraph: { title: SITE_TITLE, description: SITE_DESCRIPTION },
    twitter: { title: SITE_TITLE, description: SITE_DESCRIPTION }
};

export default function SpeechingCardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 