puts "Seeding users..."

User.destroy_all
Tag.destroy_all
Ad.destroy_all

User.create!([
    {
        name: "Adam Romero",
        password: "test123",
        phone_number: "923-003-2819",
        email_address: "itsgsans@gmail.com",
        state: "New York"
    },
    {
        name: "John Doe",
        password: "default1",
        phone_number: "193-523-0253",
        email_address: "johndoe@gmail.com",
        state: "Ohio"
    },
    {
        name: "Logan Bermudez",
        password: "realicypenguin",
        phone_number: "718-234-5307",
        email_address: "realicypenguin@gmail.com",
        state: "New York"
    }
])

puts "Seeding tags..."
Tag.create!([
    {
        name: "Manual Labor"
    },
    {
        name: "Furniture"
    },
    {
        name: "Technology"
    }
])

puts "Seeding ads..."
Ad.create!([
    {
        user_id: 2, tag_id: 3, name: "Gamecube Controller", description: "Lightly used white gamecube controller.", image: "https://preview.redd.it/p8gnd3y6jjk11.jpg?auto=webp&s=37087432f9eb8df9444c4841e5590aa67d91502b", price: 45
    },
    {
        user_id: 1, tag_id: 2, name: "Memory Foam Sofa", description: "Brought in 2002, heavily worn", image: "https://i.pinimg.com/originals/30/88/e1/3088e1733dd9eb2b8375632006c91d38.png", price: 2
    },
    {
        user_id: 3, tag_id: 1, name: "Looking for somebody to cut this tree down", description: "Tore at the base during a storm last week.", image: "https://mrtreeandlawnservice.com/wp-content/uploads/2015/03/2899116782_3fc257785b_z.jpg", price: 200
    }
])

puts "Seeding done!"