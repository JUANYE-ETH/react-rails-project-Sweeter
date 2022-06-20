class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :invalid
  
  private
  
  def render_not_found_response(error_obj)
    render json: {error: "#{error_obj.model} not found"}, status: :not_found
  end
  
  def invalid(error_obj)
    render json: {errors: error_obj.record.errors.full_messages}, status: :unprocessable_entity
  end

end
