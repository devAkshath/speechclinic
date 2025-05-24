import type { Metadata } from 'next';
import TeamsContent from './TeamsContent';

const SITE_TITLE = "Our Expert Team | The Speech Clinic Dubai | Experts in Pediatric Speech & Language Therapy";
const SITE_DESCRIPTION = "Meet our dedicated team of certified professionals who are committed to providing exceptional care and support for your child\'s development journey.";
export const metadata: Metadata = {
  title: SITE_TITLE, description: SITE_DESCRIPTION,
  openGraph: { title: SITE_TITLE, description: SITE_DESCRIPTION },
  twitter: { title: SITE_TITLE, description: SITE_DESCRIPTION }
};

const TeamsPage = () => { return <TeamsContent />; };

export default TeamsPage;
