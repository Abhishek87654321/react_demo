Post.destroy_all
  # cteate 20 posts
  20.times do
    Post.create(title: Faker::Lorem.sentence(word_count: 3), body: Faker::Lorem.paragraph(sentence_count: 2)) 
  end