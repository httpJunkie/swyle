class Comment < ApplicationRecord

    belongs_to :post, polymorphic: true,
    primary_key: :id,
    foreign_key: :post_id

end
