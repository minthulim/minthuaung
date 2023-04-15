import rehypeDocument from 'rehype-document'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify/lib'
import {remark} from 'remark'
import remarkRehype from 'remark-rehype'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeDocument)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      keepBackground: true,
    })
    .use(rehypeStringify, {allowDangerousHtml: true})
    .process(markdown)
  return result.toString()
}
