# Node/Express/EJS/MVC/MongoDB/Mongoose/Sass site with related collection schemas with `ref` and `populate()` 

This site shows a book store that displays books, the information of which comes from two collections in the MongoDB database. The Mongoose ODM (Object Document Mapper) is used to connect (with `ref` and `populate()`) the two schemas for the collections **Books** and **Persons** much as `JOIN` does in an SQL database between tables.

This site also uses the MVC pattern (Model-View-Controller) to organize how data is retrieved, e.g. a **Controller** queries **Models** for data, and then passes this data to the (EJS) **Views**.

## This version also uses *Mongoose deep population* to display comments on books that have authors which referenced in the **persons** collection:
![grafik](https://user-images.githubusercontent.com/446574/143496155-05a00911-d115-481b-a9ef-38b896274d4d.png)

### Source:  [onespace](https://onespace.netlify.app/howtos?id=442)
