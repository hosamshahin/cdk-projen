import * as path from 'path';
import { Duration } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * A CDK construct to create Lambda functions.
 */
export class LambdaConstruct extends Construct {
  constructor(parent: Construct, name: string) {
    super(parent, name);

    // most simple function with static inline code that prints the event and calls the callback function
    new lambda.Function(this, 'InlineFunction', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromInline('exports.handler = function (e, ctx, cb) { console.log("Event: ", e); cb(); };'),
      handler: 'index.handler',
      timeout: Duration.seconds(10),
    });

    // a function which is written in regular Node.js outside of the src folder
    new lambda.Function(this, 'JsFunction1', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda-js')),
      handler: 'index.handler',
    });

    // a function which is written in TypeScript inside the src/lambda folder
    new lambda.Function(this, 'JsFunction2', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda')),
      handler: 'index.handler',
    });

    // a function which is written in Python outside of the src folder
    new lambda.Function(this, 'PythonFunction', {
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda-python')),
      handler: 'index.handler',
    });

    // a function which is ignored by TypeScript but still included by running a custom compile task;
    // the compile task is using 'esbuild' to bundle & minify the function, i.e. include all depedencies into one target file
    new lambda.Function(this, 'BundledDepsFunction', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-bundled')),
      handler: 'index.handler',
    });
  }
}
