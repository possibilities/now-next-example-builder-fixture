import Link from 'next/link'
import Head from 'next/head'
import fromLibrary from 'now-next-example-builder-fixture'

export default () => (
  <>
    <Head>
      <title>home | fuffy</title>
    </Head>
    <h1>home</h1>
    <nav>
      <Link href='/'><a>home</a></Link>
      &nbsp;|&nbsp;
      <Link href='/about'><a>about</a></Link>
    </nav>
    <p>home: {fromLibrary}</p>
  </>
)
