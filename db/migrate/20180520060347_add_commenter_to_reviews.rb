class AddCommenterToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :commenter, :string
  end
end
