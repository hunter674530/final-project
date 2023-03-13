class AdSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :price, :user_id, :tag_id

end
