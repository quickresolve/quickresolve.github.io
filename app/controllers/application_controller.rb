class ApplicationController < ActionController::API
  # Prevent CSRF attacks by raising an exception.

  include ActionController::Serialization
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
