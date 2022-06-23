class SweetsController < ApplicationController
    before_action :set_sweet, only: [:show, :update, :destroy]
    before_action :is_authorized, only: [:update, :destroy]
  

  # GET /sweets
  def index
    sweets = Sweet.all
    render json: sweets
  end

  # GET /sweets/1
  # get "/sweets/:id", to: "sweets#show"
  def show
    render json: @sweet
  end

  # POST /sweets
  def create
    sweet = current_user.sweets.create(sweet_params)
    
    if sweet.id
      render json: sweet, include:['category'], status: :created
    else
      render json:{error: sweet.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  # # PATCH /sweets/1
  def update
      @sweet.update!(sweet_params)
      render json: @sweet, status: :ok
  end

  # # DELETE /sweets/1
  def destroy
    @sweet.destroy
    head :no_content
  end

  #get 
  def sweets_by_date
    sweets = Sweet.order(created_at: :desc)
    render json: sweets
  end

  #get
#   def order
#     sweets = Sweet.order()
#     render json: sweets
#   end

  private   
    #  Only allow a list of trusted parameters through.
    def sweet_params
      params.permit(:sweet, :category_id, :user_id)
    end

    #only for actions with id in their route
    def set_sweet
     @sweet = Sweet.find(params[:id])
    end
  
    def is_authorized
      is_authorized = current_user.admin? || current_user.id == @sweet.user_id
      render json: { error: "You are not authorized for this action" }, status: :forbidden unless is_authorized
    end
  
end
