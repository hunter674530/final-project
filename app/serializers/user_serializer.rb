class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :email_address, :phone_number, :state
end
