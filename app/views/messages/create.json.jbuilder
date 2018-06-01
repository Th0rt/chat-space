json.(@message, :text, :image, :created_at)
json.user(@message.user, :name)
