import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
export default function FourZeroFour() {
  return (
    <>
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-3 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="md:border-l-2 md:px-6">
            <div className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              您的
              <span className="text-slate-200">

                <RoughNotation
                  animate
                  type="highlight"
                  show={true}
                  color="#DE1D8D"
                  animationDelay={1000}
                  animationDuration={2500}
                >
                  您的路由似乎&nbsp;
                </RoughNotation>
              </span>
              出现了错误
              <div className="mt-8 text-slate-600 dark:text-slate-400">
                <span className="text-sm">Press</span>{' '}
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  ⌘
                </span>{' '}
                <span className="text-sm">+ </span>
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  K
                </span>{' '}
                <span className="text-sm">to start</span>
              </div>
            </div>
            <p className="mb-4">
              Why show a generic 404 when I can make it sound mysterious? It seems you've found
              something that used to exist, or you spelled something wrong. I'm guessing you spelled
              something wrong. Can you double check that URL?
            </p>
            <p>But dont worry, you can find plenty of other things on our homepage.</p>
          </div>
        </div>
      </div>
      <div className="mt-16 grid place-items-center">
        <Link href="/">
          <button aria-label="Scroll To Top" type="button" className="pushable">
            <span className="shadow"></span>
            <span className="edgeblue"></span>
            <span className="frontblue">返回 首页</span>
          </button>
        </Link>
      </div>
    </>
  )
}
