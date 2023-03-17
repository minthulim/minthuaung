import rehypeDocument from 'rehype-document'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify/lib'
import {remark} from 'remark'
import remarkRehype from 'remark-rehype'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
    })
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
