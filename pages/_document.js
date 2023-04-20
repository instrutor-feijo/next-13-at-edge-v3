import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  const lll = 'cicero'
  return (
    <Html lang="en">
      <Head/>
      <body className='leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed bg-slate-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
