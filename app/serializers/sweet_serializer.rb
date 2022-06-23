class SweetSerializer < ActiveModel::Serializer
  attributes :id, :sweet, :category_id, :user_id, :user_can_modify, :created_at

  has_one :user
  has_one :category

  def user_can_modify
    current_user.admin? || current_user == self.object.user
  end
 
end
