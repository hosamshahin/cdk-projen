# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConstructWithProperties <a name="ConstructWithProperties" id="cdk-projen.ConstructWithProperties"></a>

A simple CDK construct illustrating the differences in declaring construct properties with interfaces.

#### Initializers <a name="Initializers" id="cdk-projen.ConstructWithProperties.Initializer"></a>

```typescript
import { ConstructWithProperties } from 'cdk-projen'

new ConstructWithProperties(parent: Construct, name: string, props: StructProperties, props2: IBehaviorProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-projen.ConstructWithProperties.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-projen.ConstructWithProperties.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-projen.ConstructWithProperties.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-projen.StructProperties">StructProperties</a></code> | *No description.* |
| <code><a href="#cdk-projen.ConstructWithProperties.Initializer.parameter.props2">props2</a></code> | <code><a href="#cdk-projen.IBehaviorProperties">IBehaviorProperties</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="cdk-projen.ConstructWithProperties.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-projen.ConstructWithProperties.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-projen.ConstructWithProperties.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-projen.StructProperties">StructProperties</a>

---

##### `props2`<sup>Required</sup> <a name="props2" id="cdk-projen.ConstructWithProperties.Initializer.parameter.props2"></a>

- *Type:* <a href="#cdk-projen.IBehaviorProperties">IBehaviorProperties</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-projen.ConstructWithProperties.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-projen.ConstructWithProperties.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-projen.ConstructWithProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-projen.ConstructWithProperties.isConstruct"></a>

```typescript
import { ConstructWithProperties } from 'cdk-projen'

ConstructWithProperties.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-projen.ConstructWithProperties.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-projen.ConstructWithProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-projen.ConstructWithProperties.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LambdaConstruct <a name="LambdaConstruct" id="cdk-projen.LambdaConstruct"></a>

A CDK construct to create Lambda functions.

#### Initializers <a name="Initializers" id="cdk-projen.LambdaConstruct.Initializer"></a>

```typescript
import { LambdaConstruct } from 'cdk-projen'

new LambdaConstruct(parent: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-projen.LambdaConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-projen.LambdaConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="cdk-projen.LambdaConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-projen.LambdaConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-projen.LambdaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-projen.LambdaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-projen.LambdaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-projen.LambdaConstruct.isConstruct"></a>

```typescript
import { LambdaConstruct } from 'cdk-projen'

LambdaConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-projen.LambdaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-projen.LambdaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-projen.LambdaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### StructProperties <a name="StructProperties" id="cdk-projen.StructProperties"></a>

This interface is translated into a _struct_ containing data.

E.g. if translated to Java, an interface `StructProperties` is created containing a builder subclass to create an instance of the interface.

> [https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces](https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces)

#### Initializer <a name="Initializer" id="cdk-projen.StructProperties.Initializer"></a>

```typescript
import { StructProperties } from 'cdk-projen'

const structProperties: StructProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-projen.StructProperties.property.myProp">myProp</a></code> | <code>string</code> | *No description.* |

---

##### `myProp`<sup>Required</sup> <a name="myProp" id="cdk-projen.StructProperties.property.myProp"></a>

```typescript
public readonly myProp: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IBehaviorProperties <a name="IBehaviorProperties" id="cdk-projen.IBehaviorProperties"></a>

- *Implemented By:* <a href="#cdk-projen.IBehaviorProperties">IBehaviorProperties</a>

This is a _behavioral interface_ identified by `I` in its name.

It will be translated to a "regular" interface which needs to be implemented. You can also use methods here, e.g. `doSth(): void;`.

> [https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces](https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces)


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-projen.IBehaviorProperties.property.otherProp">otherProp</a></code> | <code>string</code> | *No description.* |

---

##### `otherProp`<sup>Required</sup> <a name="otherProp" id="cdk-projen.IBehaviorProperties.property.otherProp"></a>

```typescript
public readonly otherProp: string;
```

- *Type:* string

---

