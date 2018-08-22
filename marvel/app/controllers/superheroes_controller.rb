class SuperheroesController < ApplicationController
  def index
    @superheroes = Superhero.all 
  end

  def show
  end

  def create
  end

  def new
  end
end
