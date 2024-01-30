# PasswordEncode

## 注入 `PasswordEncode`

创建 `DelegatingPasswordEncoder` 对象，并使用 `@baen` 进行注入

```java
@Bean
public PasswordEncoder passwordEncoder() {
    return new DelegatingPasswordEncoder(passwordEncoderProperties.getEncodingId().getEncodingId(), encoders);
}
```

::: tip 说明
`DelegatingPasswordEncoder` 有两个参数和四个参数的构造方法。

1、两个参数： 一个是默认加密的 `encodingId`(官方推荐`bcrypt`)，一个是加密实现类的 `map`

2、四个参数： 四个参数中的前面两个和两个参数是一样的，后面两个分别是前缀和后缀，默认是大括号`{}`
:::

## 加密配置说明

使用配置文件对 `BCryptPasswordEncoder`、`Pbkdf2PasswordEncoder`、`SCryptPasswordEncoder`、`NoOpPasswordEncoder`
这些加密方式进行注入。


> 相关配置

::: code-group

```yaml [yaml]
spring:
  security:
    password-encoder:
      encoding-id: bcrypt
      encoders:
        bcrypt: false
        scrypt: false
        pbkdf2: false
        noop: true
```

```properties [properties]
spring.security.password-encoder.encoding-id=bcrypt
spring.security.password-encoder.encoders.bcrypt=false
spring.security.password-encoder.encoders.scrypt=false
spring.security.password-encoder.encoders.pbkdf2=false
spring.security.password-encoder.encoders.noop=true
```

:::


::: tip 说明
1、如果自定义 `encoing-id` 之后，`encoders` 中在指定就没有效果了。

2、`encoing-id` 和 `encoders` 都不指定，以 `PasswordEncoderEnum` 枚举类中定义的 `status` 字段为主。
:::