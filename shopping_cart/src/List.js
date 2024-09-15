const list = [
    {
      id: 1,
      title: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 89,
      img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 2,
      title: "108 Panchatantra Stories",
      author: "by Maple Press  | 1 September 2020",
      price: 98,
      img: "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 3,
      title: "Amazing Questions & Answers Science",
      author: "by Om Books Editorial Team  | 25 November 2018",
      price: 143,
      img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 4,
      title: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 57,
      img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 5,
      title: "My First 1000 Words",
      author: "by Wonder House Books  | 1 January 2018",
      price: 149,
      img: "https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 6,
      title: "101 Panchatantra Stories for Children",
      author: "by Om Books Editorial Team | 30 September 2020",
      price: 135,
      img: "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 7,
      title: "Pre-School Activities Pack ",
      author: "by Om Books Editorial Team  | 1 January 2021",
      price: 693,
      img: "https://m.media-amazon.com/images/I/913sv4sex3L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 8,
      title: "Early Learning Library Pack 1",
      author: "by Wonder House Books  | 6 December 2020",
      price: 289,
      img: "https://m.media-amazon.com/images/I/71xMttNhr7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 9,
      title: "Blossom Moral Story Book for Kids ",
      author: "by Content Team at Target Publications",
      price: 80,
      img: "https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 10,
      title: "Brain Activity Book for Kids",
      author: "by Maple Press | 1 September 2021",
      price: 86,
      img: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 11,
      title: "Willy the Silly Panda",
      author: "by Rebecca Smith  | 14 December 2021",
      price: 120,
      img: "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    
      {
          "id": 12,
          "title": "Grandma's Bag of Stories",
          "author": "by Sudha Murty | 1 January 2015",
          "price": 157,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 13,
          "title": "The Enchanted Forest",
          "author": "by J.K. Rowling | 2 February 2016",
          "price": 250,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 14,
          "title": "The Lost Island",
          "author": "by Robert Stevenson | 15 March 2018",
          "price": 199,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 15,
          "title": "The Mystery of the Blue Train",
          "author": "by Agatha Christie | 10 July 2020",
          "price": 300,
          "img": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 16,
          "title": "The Time Machine",
          "author": "by H.G. Wells | 21 June 2019",
          "price": 180,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 17,
          "title": "Adventures in Wonderland",
          "author": "by Lewis Carroll | 3 September 2017",
          "price": 220,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 18,
          "title": "Journey to the Center of the Earth",
          "author": "by Jules Verne | 7 November 2016",
          "price": 270,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 19,
          "title": "The Great Gatsby",
          "author": "by F. Scott Fitzgerald | 10 April 2015",
          "price": 320,
          "img": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 20,
          "title": "The Secret Garden",
          "author": "by Frances Hodgson Burnett | 5 May 2014",
          "price": 210,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 21,
          "title": "The Invisible Man",
          "author": "by H.G. Wells | 8 August 2017",
          "price": 190,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 22,
          "title": "The Tale of Peter Rabbit",
          "author": "by Beatrix Potter | 12 September 2019",
          "price": 160,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 23,
          "title": "The Catcher in the Rye",
          "author": "by J.D. Salinger | 22 October 2018",
          "price": 240,
          "img": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 24,
          "title": "To Kill a Mockingbird",
          "author": "by Harper Lee | 3 April 2016",
          "price": 300,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 25,
          "title": "Moby Dick",
          "author": "by Herman Melville | 12 December 2015",
          "price": 350,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 26,
          "title": "War and Peace",
          "author": "by Leo Tolstoy | 20 January 2017",
          "price": 400,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 27,
          "title": "Pride and Prejudice",
          "author": "by Jane Austen | 28 June 2018",
          "price": 280,
          "img": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 28,
          "title": "Wuthering Heights",
          "author": "by Emily Brontë | 6 July 2019",
          "price": 210,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 29,
          "title": "Little Women",
          "author": "by Louisa May Alcott | 9 February 2014",
          "price": 220,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 30,
          "title": "Great Expectations",
          "author": "by Charles Dickens | 13 October 2021",
          "price": 275,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 31,
          "title": "Jane Eyre",
          "author": "by Charlotte Brontë | 18 May 2017",
          "price": 290,
          "img": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 32,
          "title": "Frankenstein",
          "author": "by Mary Shelley | 21 August 2020",
          "price": 195,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 33,
          "title": "Dracula",
          "author": "by Bram Stoker | 27 December 2013",
          "price": 250,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 34,
          "title": "The Odyssey",
          "author": "by Homer | 14 November 2019",
          "price": 180,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 35,
          "title": "The Iliad",
          "author": "by Homer | 10 September 2015",
          "price": 300,
          "img": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 36,
          "title": "The Aeneid",
          "author": "by Virgil | 25 August 2018",
          "price": 320,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 37,
          "title": "Don Quixote",
          "author": "by Miguel de Cervantes | 7 March 2019",
          "price": 260,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 38,
          "title": "Les Misérables",
          "author": "by Victor Hugo | 16 April 2020",
          "price": 410,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 39,
          "title": "The Brothers Karamazov",
          "author": "by Fyodor Dostoevsky | 29 December 2017",
          "price": 350,
          "img": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 40,
          "title": "Crime and Punishment",
          "author": "by Fyodor Dostoevsky | 11 November 2016",
          "price": 280,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 41,
          "title": "Anna Karenina",
          "author": "by Leo Tolstoy | 4 May 2015",
          "price": 310,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 42,
          "title": "Madame Bovary",
          "author": "by Gustave Flaubert | 2 July 2014",
          "price": 230,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 43,
          "title": "The Scarlet Letter",
          "author": "by Nathaniel Hawthorne | 12 October 2018",
          "price": 220,
          "img": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 44,
          "title": "The Picture of Dorian Gray",
          "author": "by Oscar Wilde | 17 June 2017",
          "price": 260,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 45,
          "title": "The Strange Case of Dr Jekyll and Mr Hyde",
          "author": "by Robert Louis Stevenson | 30 August 2019",
          "price": 170,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 46,
          "title": "A Tale of Two Cities",
          "author": "by Charles Dickens | 19 February 2016",
          "price": 340,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 47,
          "title": "David Copperfield",
          "author": "by Charles Dickens | 26 March 2018",
          "price": 270,
          "img": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 48,
          "title": "Oliver Twist",
          "author": "by Charles Dickens | 1 November 2014",
          "price": 310,
          "img": "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 49,
          "title": "The Adventures of Huckleberry Finn",
          "author": "by Mark Twain | 9 January 2017",
          "price": 200,
          "img": "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      },
      {
          "id": 50,
          "title": "The Adventures of Tom Sawyer",
          "author": "by Mark Twain | 23 April 2016",
          "price": 240,
          "img": "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
          "amount": 1
      }
  ];
  export default list;