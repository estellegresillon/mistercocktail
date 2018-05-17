class AddReferenceColumnToReview < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :cocktail, index: true
  end
end
