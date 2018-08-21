class Api::V1::PizzasController < ApplicationController
  before_action :get_params, only: [:create, :update]

  def index
    @pizzas = Pizza.all
    render json: @pizzas
  end

  def create
    @pizza = Pizza.create(name: params[:name])
    render json: @pizza
  end

  private

  def get_params
    params.require(:pizza).permit(:name, :creator, :style, :img_src)
  end
end
