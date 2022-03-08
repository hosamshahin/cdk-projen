const { awscdk } = require('projen');
const { DependabotScheduleInterval } = require('projen/lib/github');

const project = new awscdk.AwsCdkConstructLibrary({
  name: 'cdk-projen',
  repositoryUrl: 'https://github.com/hosamshahin/cdk-projen.git',
  author: 'Hossameldin Shahin',
  authorAddress: 'hosamlshahin@gmail.com',
  jsiiFqn: 'projen.AwsCdkConstructLibrary',

  cdkVersion: '2.14.0',
  defaultReleaseBranch: 'main',
  githubOptions: {
    mergify: true,
  },
  eslint: true,
  devDeps: ['esbuild'],
  gitignore: ['.idea'],
  docgen: true,
  eslint: true,

  dependabot: true,
  dependabotOptions: {
    autoMerge: true,
    ignoreProjen: true,
    scheduleInterval: DependabotScheduleInterval.WEEKLY,
  },
  releaseWorkflow: true,
  publishToPypi: {
    distName: 'cdk-projen',
    module: 'cdk-projen',
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();