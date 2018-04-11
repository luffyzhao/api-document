export const homeRouter = [
  {path: 'documents', name: 'home.documents', component: resolve => { require(['@/views/home/documents/index.vue'], resolve)}},
  {path: 'books', name: 'home.books', component: resolve => { require(['@/views/home/books/index.vue'], resolve)}},
]
