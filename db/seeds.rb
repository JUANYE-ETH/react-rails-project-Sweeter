# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🍬 Seeding sweets..."
Sweet.create ([
    {sweet: "This app is so cool!"},
    {sweet: "Elon Musk is gonna love this ❤️!"},
    {sweet: "This is my first sweet!"}
])

puts "✅ Done seeding!"