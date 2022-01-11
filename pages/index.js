import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Git Waitlist</title>
        <meta name="description" content="Generated Git Finance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="">Git Edgeware StarterKit!</a>
        </h1>

        <p className={styles.description}>
          The First Octa Chain Tools Based Polkadot{' '}
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
          <a href="https://starter.gitshock.systems/" className={styles.card}>
            <h2>Global Conference &rarr;</h2>
            <p>Find in-depth information about GitEdgeware features and API.</p>
          </a>
          
          <a href="https://www.dev.gitshock.systems/" className={styles.card}>
            <h2>Smart Contract &rarr;</h2>
            <p>Find in-depth information about Smart Contract features and API.</p>
          </a>
          
          <a href="https://affectionate-euler-a4463a.netlify.app/" className={styles.card}>
            <h2>Learn Static EdgeKit &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://linktr.ee/Gitshock" className={styles.card}>
            <h2>Community &rarr;</h2>
            <p>An interactive online experience by the community, free for everyone.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your projects contract to a private RPC with GitEdge Kit.</p>
          </a>

          <a
            href="https://survey.survicate.com/1ea7bc0f48b5ff64"
            className={styles.card}
          >
            <h2>Public Waitlist &rarr;</h2>
            <p>
              Join Public Waitlist And Get Allocation $GTFX.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by GitEdgeWare{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
