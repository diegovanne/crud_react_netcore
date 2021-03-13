1/ Cần tạo ra các entity classes và context class
2/ Sau đó là register DI container cho context class
3/ Sau đó tạo connection string
4/ Sau đó là init 1 cái migration:
Câu lệnh: Add-Migration "InitialCreate"
5/ Sau đó là update db schema: Update-Database