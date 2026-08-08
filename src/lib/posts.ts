import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import markedKatex from "marked-katex-extension";

marked.use(markedKatex({
    throwOnError: false
}));

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));

    const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);

        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);
        
        const description = matterResult.data.description as string || "";
        const descriptionHtml = await marked(description);

        return {
            slug,
            title: matterResult.data.title as string,
            date: matterResult.data.date as string,
            description,
            descriptionHtml,
        };
    }));

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));

}

export async function getPostData(slug: string) {
    const decodedSlug = decodeURIComponent(slug);
    const fullPath = path.join(postsDirectory, `${decodedSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    const contentHtml = await marked(matterResult.content);

    return {
        slug,
        contentHtml,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        description: matterResult.data.description as string,
        keywords: matterResult.data.keywords as string,
    }
}