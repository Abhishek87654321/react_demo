class Post < ApplicationRecord
    scope :recent_posts, ->{ order(created_at: :desc)}
end
