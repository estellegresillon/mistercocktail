class ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @cocktail = Cocktail.find(params[:cocktail_id])
    @review.cocktail = @cocktail
    if @review.save
      redirect_to cocktail_path(@cocktail, anchor: "anchor-review")
    else
      render "cocktails/show"
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @cocktail = @review.cocktail
    @review.destroy
    redirect_to cocktail_path(@cocktail, anchor: "anchor-review")
  end

  private

  def review_params
    params.require(:review).permit(:content, :rating, :cocktail_id, :commenter)
  end
end
