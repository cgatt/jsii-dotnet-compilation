# replace this
# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### WafRuleProperty <a name="WafRuleProperty" id="jsii-dotnet-compilation.WafRuleProperty"></a>

#### Initializer <a name="Initializer" id="jsii-dotnet-compilation.WafRuleProperty.Initializer"></a>

```typescript
import { WafRuleProperty } from 'jsii-dotnet-compilation'

const wafRuleProperty: WafRuleProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#jsii-dotnet-compilation.WafRuleProperty.property.name">name</a></code> | <code>string</code> | The name of the rule. |
| <code><a href="#jsii-dotnet-compilation.WafRuleProperty.property.priority">priority</a></code> | <code>number</code> | If you define more than one `Rule` in a `WebACL` , AWS WAF evaluates each request against the `Rules` in order based on the value of `Priority` . |
| <code><a href="#jsii-dotnet-compilation.WafRuleProperty.property.statement">statement</a></code> | <code>aws-cdk-lib.aws_wafv2.CfnWebACL.StatementProperty \| aws-cdk-lib.IResolvable</code> | The AWS WAF processing statement for the rule, for example `ByteMatchStatement` or `SizeConstraintStatement` . |
| <code><a href="#jsii-dotnet-compilation.WafRuleProperty.property.visibilityConfig">visibilityConfig</a></code> | <code>aws-cdk-lib.aws_wafv2.CfnWebACL.VisibilityConfigProperty \| aws-cdk-lib.IResolvable</code> | Defines and enables Amazon CloudWatch metrics and web request sample collection. |
| <code><a href="#jsii-dotnet-compilation.WafRuleProperty.property.action">action</a></code> | <code>aws-cdk-lib.aws_wafv2.CfnWebACL.RuleActionProperty \| aws-cdk-lib.IResolvable</code> | The action that AWS WAF should take on a web request when it matches the rule's statement. |
| <code><a href="#jsii-dotnet-compilation.WafRuleProperty.property.captchaConfig">captchaConfig</a></code> | <code>aws-cdk-lib.aws_wafv2.CfnWebACL.CaptchaConfigProperty \| aws-cdk-lib.IResolvable</code> | Specifies how AWS WAF should handle `CAPTCHA` evaluations. |
| <code><a href="#jsii-dotnet-compilation.WafRuleProperty.property.overrideAction">overrideAction</a></code> | <code>aws-cdk-lib.aws_wafv2.CfnWebACL.OverrideActionProperty \| aws-cdk-lib.IResolvable</code> | The override action to apply to the rules in a rule group, instead of the individual rule action settings. |
| <code><a href="#jsii-dotnet-compilation.WafRuleProperty.property.ruleLabels">ruleLabels</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_wafv2.CfnWebACL.LabelProperty \| aws-cdk-lib.IResolvable[]</code> | Labels to apply to web requests that match the rule match statement. |

---

##### `name`<sup>Required</sup> <a name="name" id="jsii-dotnet-compilation.WafRuleProperty.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule.

You can't change the name of a `Rule` after you create it.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-name)

---

##### `priority`<sup>Required</sup> <a name="priority" id="jsii-dotnet-compilation.WafRuleProperty.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

If you define more than one `Rule` in a `WebACL` , AWS WAF evaluates each request against the `Rules` in order based on the value of `Priority` .

AWS WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-priority](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-priority)

---

##### `statement`<sup>Required</sup> <a name="statement" id="jsii-dotnet-compilation.WafRuleProperty.property.statement"></a>

```typescript
public readonly statement: StatementProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_wafv2.CfnWebACL.StatementProperty | aws-cdk-lib.IResolvable

The AWS WAF processing statement for the rule, for example `ByteMatchStatement` or `SizeConstraintStatement` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-statement](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-statement)

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="jsii-dotnet-compilation.WafRuleProperty.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: VisibilityConfigProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_wafv2.CfnWebACL.VisibilityConfigProperty | aws-cdk-lib.IResolvable

Defines and enables Amazon CloudWatch metrics and web request sample collection.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-visibilityconfig](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-visibilityconfig)

---

##### `action`<sup>Optional</sup> <a name="action" id="jsii-dotnet-compilation.WafRuleProperty.property.action"></a>

```typescript
public readonly action: RuleActionProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_wafv2.CfnWebACL.RuleActionProperty | aws-cdk-lib.IResolvable

The action that AWS WAF should take on a web request when it matches the rule's statement.

Settings at the web ACL level can override the rule action setting.

This is used only for rules whose statements don't reference a rule group. Rule statements that reference a rule group are `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement` .

You must set either this `Action` setting or the rule's `OverrideAction` , but not both:

- If the rule statement doesn't reference a rule group, you must set this rule action setting and you must not set the rule's override action setting.
- If the rule statement references a rule group, you must not set this action setting, because the actions are already set on the rules inside the rule group. You must set the rule's override action setting to indicate specifically whether to override the actions that are set on the rules in the rule group.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-action](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-action)

---

##### `captchaConfig`<sup>Optional</sup> <a name="captchaConfig" id="jsii-dotnet-compilation.WafRuleProperty.property.captchaConfig"></a>

```typescript
public readonly captchaConfig: CaptchaConfigProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_wafv2.CfnWebACL.CaptchaConfigProperty | aws-cdk-lib.IResolvable

Specifies how AWS WAF should handle `CAPTCHA` evaluations.

If you don't specify this, AWS WAF uses the `CAPTCHA` configuration that's defined for the web ACL.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-captchaconfig](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-captchaconfig)

---

##### `overrideAction`<sup>Optional</sup> <a name="overrideAction" id="jsii-dotnet-compilation.WafRuleProperty.property.overrideAction"></a>

```typescript
public readonly overrideAction: OverrideActionProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_wafv2.CfnWebACL.OverrideActionProperty | aws-cdk-lib.IResolvable

The override action to apply to the rules in a rule group, instead of the individual rule action settings.

This is used only for rules whose statements reference a rule group. Rule statements that reference a rule group are `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement` .

Set the override action to none to leave the rule group rule actions in effect. Set it to count to only count matches, regardless of the rule action settings.

You must set either this `OverrideAction` setting or the `Action` setting, but not both:

- If the rule statement references a rule group, you must set this override action setting and you must not set the rule's action setting.
- If the rule statement doesn't reference a rule group, you must set the rule action setting and you must not set the rule's override action setting.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-overrideaction](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-overrideaction)

---

##### `ruleLabels`<sup>Optional</sup> <a name="ruleLabels" id="jsii-dotnet-compilation.WafRuleProperty.property.ruleLabels"></a>

```typescript
public readonly ruleLabels: IResolvable | LabelProperty | IResolvable[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_wafv2.CfnWebACL.LabelProperty | aws-cdk-lib.IResolvable[]

Labels to apply to web requests that match the rule match statement.

AWS WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace.

Rules that run after this rule in the web ACL can match against these labels using a `LabelMatchStatement` .

For each label, provide a case-sensitive string containing optional namespaces and a label name, according to the following guidelines:

- Separate each component of the label with a colon.
- Each namespace or name can have up to 128 characters.
- You can specify up to 5 namespaces in a label.
- Don't use the following reserved words in your label specification: `aws` , `waf` , `managed` , `rulegroup` , `webacl` , `regexpatternset` , or `ipset` .

For example, `myLabelName` or `nameSpace1:nameSpace2:myLabelName` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-rulelabels](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-rulelabels)

---



