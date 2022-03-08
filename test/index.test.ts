import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaConstruct } from '../src';

test('Simple test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  new LambdaConstruct(stack, 'LambdaConstruct');

  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Lambda::Function', 5);
});
