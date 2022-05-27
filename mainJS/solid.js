// SOLID
// S - single responsibility
// O - open close
// L - lickov substitution
// I - interface segregation
// D - dependency inversion

// S
class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update() {
    this.text = text;
    this.modified = true;
  }

  toHTML() {
    return;
    `
         <div class="news">
         <h1>${this.title}</h1>
         <p>${this.text}</p>
         </div>

        `;
  }
  toJSON() {
    return JSON.stringify({
      title: this.title,
      text: this.text,
      modified: this.modified,
    });
  }
  //  По нашему первому принцепу это не правильно, т ак не должно быть  toHTML,toJSON

  // ми должни создать отдельній класс для вівода новостей
}

// class NewsPrinter {
//   constructor(news) {
//     this.news = news;
//   }

//   html() {
//     return `
//       <div class="news">
//       <h1>${this.news.title}</h1>
//       <p>${this.news.text}</p>
//       </div>
// `;
//   }
//   json() {
//     return JSON.stringify({
//       title: this.news.title,
//       text: this.news.text,
//       modified: this.news.modified,
//     });
//   }
// }

// const print = new NewsPrinter(new News("Зеля", "Зеля чемпион"));
// console.log(print.thml());
