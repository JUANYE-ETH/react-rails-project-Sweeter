class Sweet < ApplicationRecord
    belongs_to :user
    belongs_to :category

    validates :sweet, presence: true
    validates :sweet, length: { minimum: 1 }
    validates :sweet, length: { maximum: 500 }
    validates :sweet, exclusion: { in: %w(fuck shit crap piss ass pussy dick) }
end
