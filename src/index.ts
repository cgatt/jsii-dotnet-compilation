import * as cdk from 'aws-cdk-lib';

export interface WafRuleProperty extends cdk.aws_wafv2.CfnWebACL.RuleProperty {};
