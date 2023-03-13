class Tag < ApplicationRecord

  has_many :ads
  has_many :users, through: :ads
end
