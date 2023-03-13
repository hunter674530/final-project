class TagsController < ApplicationController

  def index
    tag = Tag.all
    render json: tag, status: :ok
end

def show
    tag = Tag.find(params[:id])
    render json: tag, status: :ok
end

def create
    tag = Tag.create!(tag_params)
    render json: tag, status: :created
end



private

def tag_params
    params.permit(:name)
end



end
