import type { NextPage } from "next"
import Head from "next/head"

/**
 * The main page of the application
 */
const Home: NextPage = () => (
  <div>
    <Head>
      <meta
        name="author"
        content="[Fernando Torres](https://github.com/saufth)"
      />
      <meta
        name="description"
        content="Next configuration with Typescript, Tailwind, ESLint and Prettier"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        Next configuration with Typescript, Tailwind, ESLint and Prettier
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="w-full h-screen flex flex-row justify-center items-center">
      Hello cosmos!
    </div>
  </div>
)

export default Home
