import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16.035 3C10.19 3 7 8.773 7 13.074c0 4.464 2.837 6.938 7.27 6.938c.609 0 .558-.05.558.193c-.858 6.546-4.611 6.76-4.611 4.805c0-1.991 2.75-2.486 2.775-2.608C12.976 21.782 10.604 21 10 21c-1.721.005-3 2.108-3 3.535C7 27.171 8.54 29 11.217 29c3.93 0 6.804-3.952 7.687-7.385c.767-3.072.57-3.212 1-3.431c1.635-.823 2.921-.612 4.764-.612c.904 0 1.548.189 2.99.428c.147 0 .34-.147.34-.295c.001-.406-1.617-3.365-1.998-3.512c-.178-.07-.588-.193-.781-.193c-1.884 0-3.237.384-4.826 1.283l-.045-.045C20.704 12.836 22 10.285 22 7.822C22 4.192 19.6 3 16.035 3zm.254 2.828c.945 0 1.477.39 1.477 1.172c-.005.726-.138 1.446-.286 2.152c-.472 2.27-1.404 4.838-1.87 7.108c-.118.518-.676.394-1.118.394c-1.945 0-2.492-2.122-2.492-3.71c0-2.388.919-5.55 3.143-6.774c.355-.208.75-.342 1.146-.342z"
                />
              </svg>
              <span className="ml-3 text-xl">Grayash`s Portfolio</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">홈</a>
            </Link>
            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">프로젝트</a>
            </Link>

            <Link href="/contact">
              <a className="mr-5 hover:text-gray-900">연락하기</a>
            </Link>
          </nav>
          {/* 다크모드 토글 버튼 작업해야함 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
