import type { Metadata } from 'next';

const SITE_TITLE = "Contact The Speech Clinic Dubai | Book an Appointment or Ask a Question";
const SITE_DESCRIPTION = "Get in touch with The Speech Clinic Dubai. Book appointments, ask questions, or learn more about our speech, therapy, and mental health services. We're here to support you and your loved ones.";

export const metadata: Metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    openGraph: { title: SITE_TITLE, description: SITE_DESCRIPTION },
    twitter: { title: SITE_TITLE, description: SITE_DESCRIPTION }
};

export default function ContactUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 