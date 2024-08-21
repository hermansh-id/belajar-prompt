import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero_title">
          Jadi keren dengan <span className='hero__title_highlight text--primary'>prompt</span>
        </Heading>
        <p className="hero_tagline">Belajar bagaimana menggunakan LLM untuk berbagai kebutuhan!</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/Index">
            Mulai Belajar
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Beranda"
      description="Belajar Prompt">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
