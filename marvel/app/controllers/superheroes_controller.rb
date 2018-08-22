class SuperheroesController < ApplicationController
  def index
    @superheroes = Superhero.all
  end

  def show
    @superhero = Superhero.find(params[:id])
  end

  def create
    @superhero = Superhero.create(name: params[:superhero][:name], superpower_id: 1)
    redirect_to superhero_path(@superhero)
  end

  def new
    @superhero = Superhero.new
  end
end
