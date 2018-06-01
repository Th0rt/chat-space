require 'rails_helper'

describe Message do

  it "is valied with message" do
    message = build(:message, text: 'hoge', image: nil)
    expect(message).to be_valid
  end

  it "is valied with image" do
    message = build(:message, text: nil)
    expect(message).to be_valid
  end

  it "is valied with message and image" do
    message = build(:message, text: 'hoge')
    expect(message).to be_valid
  end

  it "is invalied without message and image" do
    message = build(:message, text: nil, image: nil)
    message.valid?
    expect(message.errors[:text]).to include('を入力してください')
  end

  it "is invalied without group_id" do
    message = build(:message, group_id: nil)
    message.valid?
    expect(message.errors[:group]).to include('を入力してください')
  end

  it "is invalied without user_id" do
    message = build(:message, user_id: nil)
    message.valid?
    expect(message.errors[:user]).to include('を入力してください')
  end

end
