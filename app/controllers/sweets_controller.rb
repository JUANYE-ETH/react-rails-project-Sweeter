class SweetsController < ApplicationController
  before_action :set_sweet, only: [:show, :update, :destroy]

  # GET /sweets
  def index
    sweets = Sweet.all.order("created_at DESC")
    render json: sweets, status: :ok
  end

  # GET /sweets/1
  def show
    sweet = set_sweet
    render json: sweet, status: :ok
  end

  # POST /sweets
  def create
    sweet = Sweet.create!(sweet_params)
    render json: sweet, status: :created
  end

  # PATCH/PUT /sweets/1
  def update
   sweet = set_sweet
   sweet.update!(sweet_params)
   render json: sweet, status: :ok
  end

  # DELETE /sweets/1
  def destroy
    sweet = set_sweet
    sweet.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sweet
      @sweet = Sweet.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sweet_params
      params.permit(:sweet)
    end
end
