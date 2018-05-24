# README

## DB設計

### ER図
https://cacoo.com/diagrams/SNaLLbUetd5x3vLR

### Tables

#### users

| Column          |  Type  | Index | Null  | Unique |
|:----------------|:------:|:-----:|:-----:|:------:|
| name            | string | true  | false |  true  |
| email           | string | false | false |  true  |
| password_digest | string | false | false | false  |

#### groups

| Column |  Type  | Index | Null  | Unique |
|:-------|:------:|:-----:|:-----:|:------:|
| name   | string | false | false | false  |

#### users_groups

| column |    Type    | Index | Null  | Unique | foreign_key |
|:-------|:----------:|:-----:|:-----:|:------:|:-----------:|
| group  | references | true  | false | false  |    true     |
| user   | references | true  | false | false  |    true     |

#### messages


| column    |    Type    | Index | Null  | Unique | foreign_key |
|:----------|:----------:|:-----:|:-----:|:------:|:-----------:|
| text      |   string   | false | true  | false  |    false    |
| image_url |   string   | false | true  | false  |    false    |
| user      | references | true  | false | false  |    true     |
| group     | references | true  | false | false  |    true     |
