# docu-rtd-template
## You must change
### `docusaurus.config.ts`
* site_url
* repo_url
* repo_name
* title
### Comments
1. If don't want to use comments, you can delete the files `src/components/Comments.tsx`, `src/theme/`
2. install [Giscus](https://github.com/apps/giscus)
3. Enable Repository access in [Settings](https://github.com/settings/installations)
4. Get the following values in [Giscus App](https://giscus.app/)
    * data-repo
    * data-repo-id
    * data-category-id
    * data-lang
5. Set the values in `src/comments/Comment.tsx`
## Optional
1. `sidebars.ts`
2. `docs/`: documentation files
3. `docusaurus.config.ts`: 
   * `themeConfig.favicon`: site favicon
   * `themeConfig.navbar.logo.src`: logo image
   * `themeConfig.footer.logo.src`: footer logo image
   * `themeConfig.footer.copyright`: copyright text