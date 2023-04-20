import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  const lll = 'cicero'
  return (
    <Html lang="en">
      <Head/>
      <body className='leading-normal tracking-normal text-white gradient'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
