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

#### users-groups

| column        |    Type    | Index | Null | Unique |
|:--------------|:----------:|:-----:|:----:|:------:|
| chatgroups_id | references |   ○   |  -   |   -    |
| user_id       | references |   ○   |  -   |   -    |

#### messages


| column    |    Type    | Index | Null | Unique |
|:----------|:----------:|:-----:|:----:|:------:|
| text      |   string   |   -   |  ○   |   -    |
| image_url |   string   |   -   |  ○   |   -    |
| user_id   | references |   ○   |  -   |   -    |
| group_id  | references |   ○   |  -   |   -    |
