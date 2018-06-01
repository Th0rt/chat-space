FactoryGirl.define do

  factory :message do
    id 1
    image Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/images/sample.jpg'))
    created_at { Faker::Time.between(3.days.ago, 1.days.ago, :all) }
    user
    group
  end

end
