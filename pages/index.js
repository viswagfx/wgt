import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';


export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYs11bACuOoHTc3ewrongzXxDMF_W1vVXpuRCfBPOUQ&s'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  )
}

