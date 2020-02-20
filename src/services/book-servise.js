export default class BookService {
    data = [
        {id: 1, title: 'js book', author: "sergey gerasimov", price: 22, imgUrl:"https://cdn1.ozone.ru/multimedia/c1200/1019046801.jpg"},
        {id: 2, title: 'frontend middle', author: "sergey gerasimov",price: 25, imgUrl:"https://cdn1.ozone.ru/multimedia/c1200/1019046801.jpg"},
        ];
    getBooks(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.data)
            },700)
        })
    }
}
