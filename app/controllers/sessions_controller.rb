class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.find_by(name: params[:username])
    if user&.authenticate(params[:password])
          #safe operator: don't blow up the website if you can't find the user
          #bcrypt's method, `.authenticate` method will check if the password that we are sending in with params match the password digest that we saved in the backend
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

end
