# [Typescript Deep Drive](https://typescript-jp.gitbook.io/deep-dive/)

- TypeScriptはJavaScriptのスーパーセット(上位互換)であり、JavaScriptにコンパイラやIDEで使う型情報が付いただけのものです

## Why Typescript?
- JavaScriptにオプショナルな型システムを提供します
- 将来のJavaScriptで計画されている機能を現在のJavaScriptエンジンに提供します（Future JavaScript => Now）

## Why 型？
1. あなたの書いたコードを次に読まなくてはならない開発者のためのドキュメントを補強する(将来のあなたかもしれない!)
2. コンパイラがどのように理解するかを強制する。つまり、コードに対するあなたの理解が、コンパイラのアルゴリズムによる分析結果と一致する

- 必要に応じてより多くの詳細を記述し、プログラミングのエラーから守ることができます。

```
declare var $: {
    (selector:string): any;
};
$('.awesome').show(); // Okay!
$(123).show(); // Error: selector needs to be a string

```

## Javascript
### Reference
- リテラル以外にも、JavaScriptにおける全てのオブジェクト(関数、配列、正規表現 etc)は参照(reference)です.
- 変更(Mutation)はすべての参照(references)に影響する

### Null vs. Undefined
- 初期化されていない： undefined。
- 現在利用できない： null。
- == nullを使ってundefinedと nullを両方ともチェックすることを推奨します。一般的に２つを区別する必要はありません。

- 変数がglobalレベルで定義されているかどうかを確認するには、通常、typeofを使用します：

```
let someglobal: string = '123'
if (typeof someglobal !== 'undefined') {
  // someglobal is now safe to use
  console.log(someglobal);
}
```

- 独自のAPIを作成するときは、一貫性のためにnullを使用することは、良くはありませんが、問題ありません。とはいえ、できればPromiseを返すようにするべきです。そうすれば、errがnullかどうかを気にかける必要はなくなります(.thenと.catchを使います)。
  
```
fs.readFile('someFile', 'utf8', (err,data) => {
  if (err) {
    // do something
  } else {
    // no error
  }
});
```

- 有効性(validity)の意味でundefinedを使用しない
- TypeScriptチームは、nullを使いません

### this
- 関数の中でのthisへのアクセスは、関数がどのように呼び出されたかによって制御されます。これは一般に「呼び出しコンテキスト(calling context)」と呼ばれます。

### Closure
#### Why Closure?
- オブジェクトを簡単に作成することができます。リビーリングモジュールパターン(revealing module pattern)：

### Number
- JavaScriptにはたった1つの数値型しかありません。倍精度の64ビットの数値(Number)です。（浮動小数点数です。つまり、JavaScriptの数値は全てが小数なのです。整数を扱っているように見えますが、実はこれも1.0や2.0などのデータを扱っていることになります）
- Number.MAX_SAFE_INTEGER 定数は、JavaScript において正確に扱える最大整数値(2**53 -1)を表します。
- Number.MIN_SAFE_INTEGER 定数は、JavaScript において正確に扱える最小整数値(-(2**53 -1))を表します。
- 安全性をチェックするには、ES6のNumber.isSafeIntegerを使用します：

### big.js
- 任意の精度で整数を表すことができます。
- https://v8.dev/features/bigint
- BigInt最終的なBigDecimal実装の基礎を形成できます。これは、金額を小数の精度で表し、それらを正確に操作するのに役立ちます（別名0.10 + 0.20 !== 0.30）。
  - 現状：NumberJavaScriptのsは、倍精度のfloatとして表されます。これは、精度が限られていることを意味します。Number.MAX_SAFE_INTEGER定数は、安全にインクリメントすることができます可能な限り最大の整数を与えます。その値は2**53-1です。

### Truthy
- JavaScriptは、特定の場所(例えば、if 条件文とbooleanの&& || オペレータ)で、Trueと評価される値(truthy)の概念を持っています。次に示すものは、JavaScriptにおいてtruthyです。例えば0以外の数値はtruthyです。
  - 参考リスト：https://typescript-jp.gitbook.io/deep-dive/recap/truthy
- 明示的にする

## デザインパターン
### オブジェクトの生成
### プログラムの構成
### オブジェクトの振る舞い

## Future Javasctipt
### Classes
- 継承
  - クラスにコンストラクタがある場合、コンストラクタから親コンストラクタを呼び出す必要があります(TypeScriptはこれを指摘します)。これにより、thisにセットされるべきものが確実にセットされます。superを呼び出した後、コンストラクタで行いたい処理を追加できます
- アクセス修飾子(Access Modifiers)
  - TypeScriptはアクセス修飾子としてpublic、private、protectedをサポートしています
    - アクセス修飾子が指定されていない場合は、暗黙的にpublicとなり、JavaScriptの便利な性質に一致します🌹。

### Arrow Functions
- https://typescript-jp.gitbook.io/deep-dive/future-javascript/arrow-functions

### Why Arrow Functions?
1. functionを何度もタイプしなくて済む
2. thisをレキシカルに捕捉する
   a. これがうまくいく理由は、アロー関数が、関数ボディの外側のthisを捕捉するからです
   b. Tip：アロー関数の危険性
     - thisを呼び出しコンテキスト(calling context)にしたい場合はアロー関数を使うべきではありません。jquery、underscore、mochaなどのライブラリで使用されるコールバックのケースです。ドキュメントがthisの機能について言及している場合は、おそらくアロー関数の代わりにfunctionを使うべきでしょう。同様に、argumentsを使う場合は、アロー関数を使用しないでください。
3. argumentsをレキシカルに捕捉する
- ※【lexical】 語彙的な、目録、索引：レキシカルスコープというのは、関数のスコープ内で限定的に使用できる擬似的な静的スコープ。

## Project
### Modules
- ファイルモジュール(File Module)
  - external modulesとも呼ばれます。TypeScriptファイルのルートレベルにimportまたはexportが存在する場合、そのファイル内にローカルスコープ(local scope)が作成されます。
- export defaultは有害だと考えられます
  - foo.tsでFooをリファクタリングしても、bar.tsでは名前が変更されません
  - foo.ts(これはあなたのファイルの多くが参照しているものです)から、より多くのものをexportする必要がある場合、import構文をいじくる必要があります。
  - シンプルなexports + 分解importを推奨します

##

### interface
- 中身の実装を持たず、メンバーや型の定義だけ持つ。
- classの継承の時にextendsを使用するのと似てます
- インターフェースを実装している場合、インターフェースに存在するメンバーと同じ名前のメンバーが必ず存在している必要があります。




参考：https://typescript-jp.gitbook.io/deep-dive/getting-started/why-typescript