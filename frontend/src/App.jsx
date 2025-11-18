import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">

        <div id="__next">
          <div className="__variable_20b187 group/spotlight relative">

              <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>

               <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">

                  <div className="lg:flex lg:justify-between lg:gap-4">
                      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                              <a href="/">Mickoy Baton</a>
                          </h1>
                          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</h2>
                          <p className="mt-4 max-w-xs leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                          <nav className="nav hidden lg:block" aria-label="In-page jump links">
                            <ul className="mt-16 w-max">
                              <li>
                                  <a class="group flex items-center py-3 active" href="#about">
                                    <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                                  </a>
                              </li>

                              <li>
                                  <a class="group flex items-center py-3 " href="#experience">
                                    <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                                  </a>
                              </li>

                              <li>
                                  <a class="group flex items-center py-3 " href="#projects">
                                    <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                                  </a>
                              </li>

                            </ul>
                          </nav>
                      </header>

                  </div>
               </div>

          </div>

        </div>
        
      </body>
    </>
  )
}

export default App
