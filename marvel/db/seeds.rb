# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

aqua = Superpower.create(name: "water", description: "create water waves up to 100ft")
spider = Superpower.create(name: "spider", description: "car release spider webs")

Superhero.create(name: "Aqua man", superpower_id: aqua.id)
Superhero.create(name: "Hulky", superpower_id: aqua.id)
Superhero.create(name: "Spiderman", superpower_id: spider.id)
