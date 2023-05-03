const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Chris Gatt',
  authorAddress: 'chris.gatt@service.vic.gov.au',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'jsii-dotnet-compilation',
  repositoryUrl: 'https://github.com/chris.gatt/jsii-dotnet-compilation.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();