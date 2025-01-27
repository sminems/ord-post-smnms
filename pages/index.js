import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { usePrivateKeys } from '@/hooks/usePrivateKeys'
import PublishControl from '@/components/Publish.component'
import BalanceControl from '@/components/Balance.component'
import RecentArticlesControl from '@/components/RecentArticles.component'
import TransactionSearchComponent from '@/components/TransactionSearch.component';
import PublishSmall from "@/components/PublishSmall.component";
import Menu from "/components/tailwind/Menu.component";


export default function Home() { 
  const { payPrivKey, objPrivKey } = usePrivateKeys();
  return (
    <>
      <Head>
        <title>OrdPost | Blogs on the Blockchain</title>
        <meta property="twitter:card" content="https://pbs.twimg.com/profile_images/1693010455025840128/sYW3qBAt_400x400.jpg" />
        <meta property="twitter:description" content="Post on Bitcoin Ordinals"></meta>
      </Head>
      <div className='flex justify-center'>
        <div> <h1 className='title text-2xl mt-4 lg:text-7xl'> OrdPost </h1></div>
      </div>
      <div className='flex justify-center'>
        <TransactionSearchComponent />
      </div>
        <section className="md:flex md:mx-auto">
        <article className="mx-auto flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="w-full text-center">
            <Link href="/new-post" className="hidden w-full bg-white text-blue-500 p-2 px-10 mx-10 my-4 rounded-md hover:bg-gray-800 transition duration-200 ease-in-out shadow-lg md:absolute">
              CREATE A NEW POST
            </Link>
            <PublishSmall />
          </div> 
          </article>
          <aside className="w-full">
          <RecentArticlesControl />
            
          </aside>
          
        </section>

        <section className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {/* The Links section can be refactored into a separate component to avoid repetition. For now, it's kept as is. */}
          <Link href="/new" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">Post Now</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Post to Bitcoin</p>
          </Link>

          <Link href="/posts" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">View Posts</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">View Posts from OrdPost.com</p>
          </Link>

          <Link href="/search" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">Search</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Search the world of posts. </p>
          </Link>

          <Link href="/profile" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">Profile</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">View & Export Your Keys </p>
          </Link>
        </section>
        
    </>
  );
}