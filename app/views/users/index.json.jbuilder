json.users do
  json.array! @users do |user|
    json.id   user.id
    json.name user.name
    json.groups do
      json.array! user.groups do |group|
        json.id group.id
      end
    end
  end
end
