# next-js-mysql

[https://github.com/nekonenene/next-js-sequelize-mysql](https://github.com/nekonenene/next-js-sequelize-mysql) では  
ORM として sequelize を使った DB アクセスをおこなったが、  
あまり使い勝手良く感じなかったので、 [mysql2](https://github.com/sidorares/node-mysql2) および [sql-template-strings](https://github.com/felixfbecker/node-sql-template-strings) を使うやり方にした。

実際、モデルごとにごちゃごちゃ書かなくていいのでこっちの方がいい。

```
API resolved without sending a response for /api/article/list, this may result in stalled requests.
```

という警告が出るのだけが悩み。どうやったら直せるんだろう・・・？


## Dev

1. Clone this repository
2. `npm i`
3. `npm run dev`
