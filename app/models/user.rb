class User < ApplicationRecord

  has_many :ads
  has_many :tags, through: :ads

  has_secure_password
end
