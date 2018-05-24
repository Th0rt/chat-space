# README

## DB設計

### ER図
https://cacoo.com/diagrams/SNaLLbUetd5x3vLR

### Tables

+ ○ => true
+ associationはER図に記載しました

#### users

| Column          |  Type  | Index | Null | Unique |
|:----------------|:------:|:-----:|:----:|:------:|
| name            | string |   ○   |  -   |   ○    |
| email           | string |   -   |  -   |   ○    |
| password_digest | string |   -   |  -   |   -    |

#### groups

| Column |  Type  | Index | Null | Unique |
|:-------|:------:|:-----:|:----:|:------:|
| name   | string |   -   |  -   |   -    |

#### users_groups

| column |    Type    | Index | Null | Unique | foreign_key |
|:-------|:----------:|:-----:|:----:|:------:|:-----------:|
| group  | references |   ○   |  -   |   -    |      ○      |
| user   | references |   ○   |  -   |   -    |      ○      |

#### messages


| column    |    Type    | Index | Null | Unique | foreign_key |
|:----------|:----------:|:-----:|:----:|:------:|:-----------:|
| text      |   string   |   -   |  ○   |   -    |      -      |
| image_url |   string   |   -   |  ○   |   -    |      -      |
| user      | references |   ○   |  -   |   -    |      ○      |
| group     | references |   ○   |  -   |   -    |      ○      |
