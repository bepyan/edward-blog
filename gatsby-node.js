const _ = require(`lodash`);
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const { data, errors } = await graphql(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              draft
              date
              series
              tags
            }
            fields {
              slug
            }
          }
        }
        tagsGroup: allMarkdownRemark {
          group(field: frontmatter___tags) {
            tag: fieldValue
          }
        }
        seriesGroup: allMarkdownRemark {
          group(field: frontmatter___series) {
            series: fieldValue
          }
        }
      }
    }
  `);
    if (errors) return Promise.reject(errors);

    // 포스트 페이지 만들기
    data.posts.edges
        .filter(({ node }) => !node.frontmatter.draft)
        .forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: path.resolve(`src/pages/post.tsx`),
                context: {},
            });
        });

    // // 태그 만들기
    // data.tagsGroup.group.forEach(({ tag }) => {
    //     createPage({
    //         path: `/tags/${_.kebabCase(tag)}/`,
    //       component: path.resolve(`src/pages/Tags.tsx`),
    //         context: {
    //             tag,
    //         },
    //     });
    // });

    // // 시리즈 만들기
    // data.posts.edges
    //     .reduce((ac, { node }) => {
    //         const { series } = node.frontmatter;
    //         return [...new Set([...ac, series])];
    //     }, [])
    //     .forEach((series) => {
    //         createPage({
    //             path: `/series/${_.kebabCase(series)}/`,
    //             component: TagsTemplate,
    //             context: {},
    //         });
    //     });
};
