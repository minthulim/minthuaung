import Head from 'next/head'

import BlogPosts from '@/components/blog-posts'
import Container from '@/components/container'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Post from '@/interfaces/post'
import {getAllPosts} from '@/lib/api'

type Props = {
  allPosts: Post[]
}

export default function Index({allPosts}: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Min Thu Aung</title>
        </Head>
        <Container>
          <Intro />
          {allPosts.length > 0 && <BlogPosts posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {allPosts},
  }
}
