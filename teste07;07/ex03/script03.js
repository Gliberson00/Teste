const bookByCategory = [
{
    category: "Riqueza",
    books: [
       { 
        titulo: "Os segredos da mente melionaria",
        autor: "T.Harv Eker",
    },    
    { 
        titulo: "O homem masi rico da babilonia",
        autor: "George s. Clason",
    }, 
    { 
        titulo: "Os segredos da mente melionaria",
        autor: "Robert T. Kiyosaki e Sharon L. Lechter",
    }
    ],

},
{
    category: "Inteligencia emocional",
    books: [
       { 
        titulo: "Voce e insubstituivel",
        autor: "Augusto curry",
    },    
    { 
        titulo: "Ansiedade - Como enfrentar o mal do século",
        autor: "Augusto curry",
    }, 
    { 
        titulo: "Os 7 habitos das pessoas altamente eficazes",
        autor: "Stephen R. Covey",
    }
    ],

},

];

const totalcategorias = bookByCategory.length

console.log(totalcategorias)
for(let categori of bookByCategory){
    console.log('o numero de livros da categoria:', categori.category)
    console.log(categori.books.length)
}





function contadorautor(){
    let autores = [];
    for( let category of bookByCategory){
        for( let book of category.books){
            if(autores.indexOf(book.autor) == -1){
                autores.push(book.autor)
            }
        }
    }
    console.log("Quantidade de autores :", autores.length)
}

contadorautor();

function booksofautor(autor){
    let books = [];
    for( let category of bookByCategory){
        for( let book of category.books){
            if( book.autor === autor){
                books.push(book.titulo)
                
            }
        }
    }
    console.log(`Livros do autor ${autor}: ${books.join(", ")} `)
}

booksofautor('Augusto curry')