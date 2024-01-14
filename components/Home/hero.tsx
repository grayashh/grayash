import Link from 'next/link';
import Animation from './animation';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center z-2">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Grayash
          <br />
          Develop Portfolio
        </h1>
        <p className="mb-8 leading-relaxed">
          <Image src="/images/favicon_umoh.ico" alt="" width="15px" height="15px" />{' '}
          <Link href="https://join.umoh.io" target="_blank">
            <span className="underline text-purple-500 cursor-pointer">UMOH</span>
          </Link>{' '}
          Frontend Developer at{' '}
          <Link href="https://umoh.io/@splab" target="_blank">
            <span className="underline cursor-pointer">Splab</span>
          </Link>{' '}
          <br />
          <Image src="/images/ausg.png" alt="" width="15px" height="15px" />{' '}
          <Link href="https://ausg.me" target="_blank">
            <span className="underline cursor-pointer">AUSG</span>
          </Link>{' '}
          7th <br />
          <Image src="/images/dnd.ico" alt="" width="15px" height="15px" />{' '}
          <Link href="https://www.dnd.ac" target="_blank">
            <span className="underline cursor-pointer">DND</span>
          </Link>{' '}
          9th <br />
          <br />
        </p>
        <div className="flex justify-center">
          <Link href="https://grayashh.notion.site/38b138110e534299990950c4d72981b7?pvs=4" target="_blank">
            <a className="btn-project">Resume</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
