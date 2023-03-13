class AdsController < ApplicationController
  
    def index
        ad = Ad.all
        render json: ad, status: :ok
    end

    def show
        ad = Ad.find(params[:id])
        render json: ad, status: :ok
    end

    def create
        ad = Ad.create!(ad_params)
        render json: ad, status: :created
    end

    def update
      ad = Ad.find(params[:id])
      ad.update(ad_params)
      render json: ad, status: :created
  end

  def destroy
    ad = Ad.find(params[:id])
    ad.destroy
    render json: ad, status: :ok
end

  private

    def ad_params
        params.permit(:name, :description, :image, :price, :tag_id, :user_id)
    end
  
  
end
