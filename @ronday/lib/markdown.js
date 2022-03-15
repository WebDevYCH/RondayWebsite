import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkLint from 'remark-lint'
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style'
import html from "remark-html";
import { readFileSync } from "fs";

const MARKDOWN_FILES_PATH = "/assets/md/";

export const markdownToHTML = async (content) => {
  const statement = await remark().use(html)
        .process(content);
  return statement.toString();
};

export const getParsedMarkdownFile = (name) => {
  const path = join(process.cwd(), `${MARKDOWN_FILES_PATH}/${name}.md`);
  const buffer = readFileSync(path);
  const { content } = matter(buffer);
  
  return { content };
};
