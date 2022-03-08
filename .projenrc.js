const { awscdk, ProjectType } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Hossameldin Shahin',
  authorAddress: 'hosamlshahin@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-projen',
  repositoryUrl: 'https://github.com/hosamshahin/cdk-projen.git',
  githubOptions: { mergify: true },
  eslint: true,
  gitignore: ['.idea'],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();