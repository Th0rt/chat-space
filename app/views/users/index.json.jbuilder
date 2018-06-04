json.users do
  json.array! @user do |user|
    json.id   user.id
    json.name user.name
    json.array! user.groups do |group|
      json.id group.id
    end
  end
end
