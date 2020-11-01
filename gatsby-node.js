const path = require('path');

// Added fileInfo to markdownRemark nodes
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemark implements Node {
      fileInfo: File @link(from: "parent")
    }
  `);
};

// Create projects pages
const createProjectPages = async (createPage, edges) => {
  const projectTemplate = path.resolve('src/templates/Project.jsx');
  edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: `/${slug}`,
        component: projectTemplate,
        context: {
          slug,
        },
      });
    }
  );
};

// Create pages main process
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      projects: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "projects" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  await createProjectPages(createPage, result.data.projects.edges);
};
