# Node JS Ödev 7-8-9-10-11-12: Clean Blog App

https://cleanblogfs.herokuapp.com/

* Node JS
* MongoDB 
* MVC pattern 

## 📕 Dependencies: 
* Express JS
* Mongoose
* Method-Override
* Ejs
* dotenv

## 👨‍💻 devDependencies
* Nodemon

<br>

# Ödevler:

### **Ödev 7:**

- CleanBlog proje klasörünü oluşturalım.
- Package.json dosyasını oluşturalım.
- Prettier ayarlarını yapalım.(İsteğe bağlı)
- Express ve Nodemon modüllerini indirelim.
- Git init ile lokal repomuzu oluşturalım.
- Get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.
- .gitignore dosyası oluşturalım ve ilk repomuzu gönderelim.

### Ödev 8: 

- Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.
- İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
- EJS modülünü indirelim.
- Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
- Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.
- Partials klasör yapısını oluşturalım.
- İlgili yönlendirmeleri ve _navigation.ejs klasöründeki link düzenlemelerini yapalım.

### Ödev 9:

- Cleanblog-test-db adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
- "Add New Post" sayfamızdan göndericeğimiz veriler req.body ile yakalayalım, gerekli middleware fonksiyonarını kullanalım.
- Title:String, detail:String, dateCreated:Date(default now) özelliklerine sahip Post modelini oluşturalım.
- Veri tabanımızda 3 adet pos dökümanı oluşturalım.
- Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.

### Ödev 10:

- Index.ejs içerisinde /posts/<%= posts[i]._id %> ile _id bilgisini gönderelim.
- App.js içerisinde GET metoduyla "/posts/:id" ile gönderilen "_id" yi yakalayalım. .
- Tekil post bilgilerini post.ejs dosyasına gönderelim.
- Post.ejs içerisine post.title, post.detail ve post.dateCreated bilgilerini gönderelim. (her bir post için ayrı image kullanmayacağız)

### Ödev 11:

- Post.ejs template içerisinde UPDATE ve DELETE butonu oluşturalım.
- Herhangi bir post verisini güncellemek için gerekli çalışmaları yapalım.
- Herhangi bir post verisini silmek için gerekli çalışmaları yapalım.
- Kodumuzu MVC yapısına göre tekrar düzenleyelim.

### Ödev 12:

- Uygulamamızı HEROKU ve MongoDB Atlas ücresiz servislerini kullanarak yükleyelim.
- ***Not:*** Uygulamamızda sayfalama ve görsel yükleme işlemlerini yapmadık. Sonraki projemizde de bu özellikleri kullanacağız.

--> ***Sonraki Proje*** <a href="https://github.com/frknsprnl/SmartEdu">SmartEDU Education Portal Project</a>
