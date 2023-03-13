class UsersController < ApplicationController

  def index
    user = User.all
    render json: user, status: :ok
end

def show
    user = User.find(params[:id])
    render json: user, status: :ok
end

def create
    user = User.create!(user_params)
    render json: user, status: :created
end

def update
  user = User.find(params[:id])
  user.update(user_params)
  render json: user, status: :created
end

def destroy
user = User.find(params[:id])
user.destroy
render json: user, status: :ok
end

private

def user_params
    params.permit(:name, :password, :email_address, :phone_number, :state)
end


end


