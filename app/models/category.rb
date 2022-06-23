class Category < ApplicationRecord
    has_many :sweets
    has_many :users, through: :sweets
end
