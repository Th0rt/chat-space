json.message do
  json.user_name  @message.user.name
  json.text       @message.text
  json.image_url  @message.image.url
  json.created_at @message.created_at
end
