# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🍬 Seeding Sweets..."
Sweet.create(sweet: "This app is so cool!", user_id: User.first.id, category_id: Category.first.id)
Sweet.create(sweet: "Elon Musk is gonna love this ❤️!", user_id: User.find(2).id, category_id: Category.find(2).id)
Sweet.create(sweet: "This is my first sweet!", user_id: User.find(3).id, category_id: Category.last.id)

puts "🐛 Seeding Categories..."
cat1 = Category.create(category_type:"Positive")
cat2 = Category.create(category_type:"Neutral")
cat3 = Category.create(category_type:"Negative")

puts "🧍 Seeding Users..."
u1 = User.create(username: 'Juanye', password: "password123", admin: true)
u2 = User.create(username: 'Bob', password: "password123")
u3 = User.create(username: 'Billy', password: "password123")
u4 = User.create(username:"testadmin", password:"password", admin: true)

puts "✅ Done seeding!"