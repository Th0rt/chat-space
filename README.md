# README

## DB設計

### ER図
https://cacoo.com/diagrams/SNaLLbUetd5x3vLR

### Tables

#### users

columns

| Column          |  Type  | Index | Null  | Unique |
|:----------------|:------:|:-----:|:-----:|:------:|
| name            | string | true  | false |  true  |
| email           | string | false | false |  true  |
| password_digest | string | false | false | false  |

associations

* has_many :groups, through: :users_groups
* has_many :users_groups
* has_many :messages

#### groups

| Column |  Type  | Index | Null  | Unique |
|:-------|:------:|:-----:|:-----:|:------:|
| name   | string | false | false | false  |

associations

* has_many :messages
* has_many :users, through: :users_groups
* has_many :users_groups

#### users_groups

columns

| column |    Type    | Index | Null  | Unique | foreign_key |
|:-------|:----------:|:-----:|:-----:|:------:|:-----------:|
| group  | references | true  | false | false  |    true     |
| user   | references | true  | false | false  |    true     |

associations
* belongs_to :groups
* belongs_to :users

#### messages

columns

| column    |    Type    | Index | Null  | Unique | foreign_key |
|:----------|:----------:|:-----:|:-----:|:------:|:-----------:|
| text      |   string   | false | true  | false  |    false    |
| image_url |   string   | false | true  | false  |    false    |
| user      | references | true  | false | false  |    true     |
| group     | references | true  | false | false  |    true     |

associations
* belongs_to :groups
* belongs_to :users
