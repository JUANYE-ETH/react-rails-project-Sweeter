class User < ApplicationRecord
    has_secure_password

    has_many :sweets
    has_many :categories, through: :sweets

    validates :username, presence: true, uniqueness: true, length: { minimum: 3 }
end
