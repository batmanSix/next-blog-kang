
import ScrollTop from "@/components/ScrollTop";
import Image from "next/image";
import Link from "next/link";
import SectionContainer from "@/provides/SectionContainer";
import { RoughNotation } from 'react-rough-notation'
import Tag from "@/components/Tag";
export default function Home() {
  const posts = [
    { tags: ['apple', '2'], },
    { tags: ['apple', 'hacks'] },
    { tags: ['apple', 'hacks'] },
    { tags: ['apple', 'hacks'] }
  ];
  return (
    <SectionContainer>
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{' kang bo'}
              <span className="ml-2 text-primary-color-500 dark:text-primary-color-dark-500">development</span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              {`Welcome to ${'my website'}. I am a front Engineer who is passionate about Data Science and Automation. In my free time, I like developing `}
              side projects and learning new technologies.
            </h2>
            <div className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
              This is my place for{' '}
              <div className="text-slate-200">
                <RoughNotation
                  animate
                  type="box"
                  show={true}
                  color="#DE1D8D"
                  animationDelay={1000}
                  animationDuration={2500}

                >
                  thoughts, reflections & everything&nbsp;
                </RoughNotation>
              </div>
              in between. Have a good read!
            </div>
            <div className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              This is my place for{' '}
              <span className="text-slate-200">

                <RoughNotation
                  animate
                  type="highlight"
                  show={true}
                  color="#DE1D8D"
                  animationDelay={1000}
                  animationDuration={2500}
                >
                  thoughts, reflections & everything&nbsp;
                </RoughNotation>
              </span>

              in between. Have a good read!{' '}
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
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/projects">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">What I built</span>
                      </span>
                      <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Projects&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="https://parthdesai.vercel.app/">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">Read my story</span>
                      </span>
                      <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Website&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="https://parthdesai.vercel.app/resume.pdf">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-fuchsia-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">
                          Hire me!&nbsp;&nbsp;&nbsp;
                        </span>
                      </span>
                      <span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Resume&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />

        <div>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, 5).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter as any
            return (
              <div>
                <Link
                  href={`/blog/${slug}`}
                  key={slug}
                  className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="py-6">
                    <article>
                      <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={'2024-5-01'}>222</time>
                            {' • '}
                            views
                          </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-4">
                          <div className="space-y-1">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <div
                                  className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                                >
                                  How to get the Spotify Refresh Token
                                </div>
                              </h2>
                            </div>
                            <div className="flex flex-wrap">
                              {tags.map((tag: any) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                            <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                              {summary}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <ScrollTop></ScrollTop>
    </SectionContainer>
  );
}