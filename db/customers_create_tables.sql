DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS customers_phones;

CREATE TABLE customers (
       id uuid NOT NULL,
       first_name VARCHAR(100) NOT NULL,
       last_name VARCHAR(100) NOT NULL,
       gender VARCHAR(20) NOT NULL,
       birth_date timestamp NOT NULL,
       address VARCHAR(100) NULL,
       document_type VARCHAR(20) NOT NULL,
       document_number VARCHAR(20) NOT NULL,
       email varchar(50) NOT NULL,
       phone varchar(50) NOT NULL,
       active bool NOT NULL default true,
       creation_timestamp timestamp NOT NULL,
       PRIMARY KEY (id)
);

CREATE TABLE customers_phones (
      id uuid NOT NULL,
      phone VARCHAR(50) NOT NULL,
      customer_id uuid NOT NULL,
      active bool NOT NULL default true,
      creation_timestamp timestamp NOT NULL,
      CONSTRAINT customers_phones_pkey PRIMARY KEY (id),
      CONSTRAINT customers_fk FOREIGN KEY (customer_id)
          REFERENCES public.customers (id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE NO ACTION
          NOT VALID
);




insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('2f1b862e-57df-417c-a98a-67ebc8ad3aae','Jenna','Murphy','Female','2005-03-10T08:17:36Z','37 East Broad Street, Savannah GA 31401','DNI','09139150','j.murphy@randatmail.com','303-1091-19','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('e0ef38de-1b1d-4b68-b7a3-40b2460bc043','Harold','Watson','Male','1971-12-26T05:42:49Z','2552 Massachusetts Avenue Northwest, Washington AR 20008','DNI','05014934','h.watson@randatmail.com','380-6961-23','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('5ea2bef1-b694-4b0c-98aa-b0fa85fe5826','Steven','Higgins','Male','1978-06-04T13:56:16Z','16 Clark Street, undefined VT 05150','DNI','07105419','s.higgins@randatmail.com','850-2797-89','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('af33284c-fa27-4827-9731-3fc98f60f1ce','Myra','Henderson','Female','1973-01-07T12:23:25Z','722 Oak Grove Circle, Severna Park MD 21146','DNI','12227535','m.henderson@randatmail.com','013-0612-77','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('713f92af-119f-49b1-9ece-33736f3281fd','Cadie','Wilson','Female','2000-12-22T22:11:35Z','29 Church Street, Easthampton MA 01027','DNI','06126537','c.wilson@randatmail.com','553-2924-16','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('4dd2063a-fd60-40ad-9c7f-9267af090512','Stuart','Roberts','Male','1976-09-02T02:00:02Z','5575 South Dakota Avenue Northeast, Washington AR 20011','DNI','03179757','s.roberts@randatmail.com','722-1562-51','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('60f98a5d-90fe-439d-a874-dcd248e3a7a2','Lily','Hamilton','Female','2001-12-25T05:23:44Z','4231 Laurel Street, Anchorage AK 99508','DNI','0416347X','l.hamilton@randatmail.com','370-5457-44','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('629f0152-0364-4a3e-89e8-07e75d681ade','Cherry','Morgan','Female','1998-11-13T16:32:35Z','6460 Vermont 113, Vershire VT 05079','DNI','05025750','c.morgan@randatmail.com','948-6044-97','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('71f0c72d-9db9-4ccd-9a9d-ea65b6cd0817','Victor','Johnston','Male','1971-01-11T15:44:20Z','3189 Main Street, Mammoth Lakes CA 93546','DNI','06195736','v.johnston@randatmail.com','964-9467-86','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('6a1056c0-d6e6-493f-945e-58c4da5d1da2','Robert','Barrett','Male','2004-11-16T15:18:07Z','2806 Bass Street, Anchorage AK 99507','DNI','07112696','r.barrett@randatmail.com','943-2319-19','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('1cbc1ae9-b185-4fd4-9eb2-6a2c187c2b44','Miller','Allen','Male','1999-11-12T22:26:01Z','122 Summer Street, Medford MA 02155','DNI','06201554','m.allen@randatmail.com','607-2429-95','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('8288395f-3116-4278-88ff-31c666b265dd','Edgar','Hawkins','Male','1980-06-02T03:21:54Z','1124 Frederick Douglass Avenue, Oklahoma City OK 73117','DNI','10243374','e.hawkins@randatmail.com','799-3211-27','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('a92a2484-6aa1-4725-a3fc-e765b9d3ed21','Belinda','Ferguson','Female','2000-01-15T23:50:47Z','8300 Highway 100, Nashville TN 37221','DNI','09149975','b.ferguson@randatmail.com','681-8974-69','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('c0a4f3e0-7b66-4df5-9091-3f06418ad04a','Vanessa','Riley','Female','2000-06-30T00:16:56Z','7095 Gladiola Street, Arvada CO 80004','DNI','03118339','v.riley@randatmail.com','300-3119-70','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('4ebc7349-3b28-441c-92f6-452f74a58275','Ashton','Evans','Male','2012-03-13T16:01:48Z','565 North Lakeshore Drive, Panama City Beach FL 32413','DNI','11113811','a.evans@randatmail.com','193-0197-85','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('811c96c0-696f-4b97-8c45-b26d4a2dd0b8','Gianna','Kelley','Female','1989-11-20T14:23:52Z','1720 Quacco Road, Pooler GA 31322','DNI','01313977','g.kelley@randatmail.com','383-4930-13','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('0ce008c0-2617-43c2-9184-e16756ef19e7','Heather','Higgins','Female','1976-01-04T06:20:01Z','401 Fairhill Court, Annapolis MD 21403','DNI','01264110','h.higgins@randatmail.com','177-5527-08','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('5bf0b5bb-b173-43c4-8abb-f3e5d8af9ab7','Miley','Johnson','Female','1976-02-17T16:28:48Z','104 White Street, Manchester CT 06042','DNI','03297091','m.johnson@randatmail.com','701-8286-13','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('8381d387-8d5d-4026-aa33-b15a580662ff','Justin','Foster','Male','1992-11-28T08:50:25Z','3098 Vermont 122, Sheffield VT 05866','DNI','02074339','j.foster@randatmail.com','393-7689-54','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('8337787b-ae38-4d45-a331-0ea0452f9236','Mary','Barnes','Female','2000-12-10T13:23:00Z','2803 6th Street Northeast, Washington AR 20017','DNI','04125190','m.barnes@randatmail.com','026-1130-37','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('6a3e6107-1540-4af5-9153-6e1a9527ebc2','Myra','Russell','Female','2014-01-31T02:44:47Z','21950 Arnold Center Road, Carson CA 90810','DNI','11240932','m.russell@randatmail.com','955-7617-06','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('24e9509a-400f-4a80-b4ef-fb6e2457faa4','Annabella','Bailey','Female','2010-03-06T07:52:16Z','2024 Merrily Drive, Montgomery AL 36111','DNI','10085136','a.bailey@randatmail.com','744-0993-37','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('74fd6fb7-ba11-4d9f-a71e-1ed501a059fa','Miranda','Parker','Female','1996-01-29T05:32:09Z','5244 West Port Au Prince Lane, Glendale AZ 85306','DNI','04030992','m.parker@randatmail.com','625-9540-59','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('4c40d525-ae8b-4f40-9d04-6f7cec3a9db3','Arianna','Smith','Female','1983-05-17T15:18:07Z','4924 West 65th Avenue, Arvada CO 80003','DNI','01105113','a.smith@randatmail.com','709-2392-17','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('593f861a-f448-44b0-8370-8f5caa8633cd','Elise','Cole','Female','1972-05-29T13:54:00Z','1420 Turtleback Trail, Panama City FL 32413','DNI','03157036','e.cole@randatmail.com','749-1492-80','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('4f668c72-3a7d-4a84-b45c-1c169288e70d','Adele','Holmes','Female','1977-08-29T06:14:19Z','619 Colusa Avenue, Berkeley CA 94707','DNI','01044357','a.holmes@randatmail.com','709-8462-66','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('a08b3803-dc3a-43e3-a7f9-12b4b5d1c5fe','Valeria','Cameron','Female','1999-08-18T20:33:14Z','10612 Middleground Road, Savannah GA 31419','DNI','07120212','v.cameron@randatmail.com','261-7273-33','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('a903e62a-516b-4f8f-b3c6-ccefb25f6e16','Lucy','Barrett','Female','2018-04-08T23:57:33Z','1407 Walden Court, Crofton MD 21114','DNI','07029375','l.barrett@randatmail.com','140-1455-04','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('7e5ef5c6-fd51-469d-8ff8-5669fa336502','Albert','Chapman','Male','1972-09-03T08:22:58Z','4418 Signal Hill Road, Louisville KY 40207','DNI','12062697','a.chapman@randatmail.com','992-2073-09','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('ff779f57-7b32-4ac5-b696-12669090d8b3','Adelaide','Crawford','Female','2003-01-04T19:08:24Z','83 Kennedy Road, Manchester CT 06042','DNI','04119578','a.crawford@randatmail.com','099-1892-42','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('758e45fc-c2ec-401c-b984-463c20dfd4f2','Chester','Rogers','Male','2003-09-01T04:11:08Z','19404 North 77th Avenue, Glendale AZ 85308','DNI','10270096','c.rogers@randatmail.com','147-4319-27','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('b363f82c-7c28-4212-a309-e626b36c1ff6','Chelsea','Mitchell','Female','1999-07-19T11:58:58Z','222 Quince Street, San Diego CA 92103','DNI','05208276','c.mitchell@randatmail.com','342-2791-47','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('d6ef1a53-b16f-4635-8118-a2a45bda7345','James','Moore','Male','1992-08-14T23:23:26Z','249 Progress Drive, Manchester CT 06042','DNI','06040296','j.moore@randatmail.com','376-6273-16','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('7fcc9533-dfe3-4de0-8b69-b9b26a810cae','Sophia','Brooks','Female','2017-10-24T08:05:57Z','28 Garden Drive, Manchester CT 06040','DNI','06061310','s.brooks@randatmail.com','475-4556-28','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('328a5f11-7c17-4dc9-9e3d-b61c4773794c','Roman','Martin','Male','2009-10-25T06:23:09Z','100 Fenwick Village Drive, Savannah GA 31419','DNI','01239750','r.martin@randatmail.com','123-5377-76','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('d086371d-7ffe-4d8a-b8e9-bf4df105c8cd','Carina','Spencer','Female','1984-09-24T12:49:55Z','65 Hilltop Lane, McKinleyville CA 95519','DNI','03276450','c.spencer@randatmail.com','730-5901-66','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('b6a94aa9-33d3-402c-b760-039249703931','Rubie','Chapman','Female','1979-10-21T14:25:08Z','5444 Nicole Boulevard, Panama City FL 32404','DNI','05060496','r.chapman@randatmail.com','339-2837-39','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('1388311f-e240-4ad8-98d4-f338ad5421c4','Lily','Walker','Female','2017-11-03T21:03:55Z','6928 North 87th Lane, Glendale AZ 85305','DNI','10189954','l.walker@randatmail.com','921-7925-24','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('92dc47cb-27fd-4334-869f-7901eb8c1d72','Belinda','Owens','Female','1999-05-02T14:16:48Z','68 Princeton Street, Manchester CT 06042','DNI','12010151','b.owens@randatmail.com','395-7877-24','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('04c5f99c-b0a9-463c-a6d9-b9083e2b465e','Ted','Fowler','Male','2007-05-02T02:17:23Z','3298 Chestnut Street Northwest, Washington AR 20015','DNI','04217198','t.fowler@randatmail.com','635-8646-35','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('6ab48be6-0fd3-411b-a508-018471f504e6','Edgar','Murphy','Male','1999-01-26T01:15:30Z','4107 East 68th Avenue, Anchorage AK 99507','DNI','12125714','e.murphy@randatmail.com','385-9035-44','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('805a8e95-b92e-462b-ad32-f66e327ce6cf','Oliver','Campbell','Male','2009-03-29T08:51:51Z','17 Hillcrest Road, Rutland VT 05701','DNI','06205556','o.campbell@randatmail.com','871-8510-29','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('3c2add9f-05ab-485b-8b3d-0586cd0098fd','Alexia','West','Female','1977-04-20T00:14:30Z','37 Kensington Street, Manchester CT 06040','DNI','12165758','a.west@randatmail.com','295-9906-80','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('b46fe923-28a3-4bc8-8598-785bb4818fde','Emily','Sullivan','Female','1997-09-26T04:04:38Z','435 Benita Drive, Nashville TN 37211','DNI','06183374','e.sullivan@randatmail.com','503-3730-96','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('70eefc47-9b4d-4408-8771-3aae71093c34','Darcy','Taylor','Female','1992-03-09T20:09:33Z','24 Haven Drive, Savannah GA 31406','DNI','07064210','d.taylor@randatmail.com','569-6247-63','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('c1b84b05-f064-4f27-86f2-f6e9d379c2f5','Blake','Cunningham','Male','1976-05-02T07:02:05Z','503 Blackwood Terrace Southeast, Calhoun GA 30701','DNI','06106894','b.cunningham@randatmail.com','943-1033-78','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('29f18143-046d-4d1e-901c-860bba36ba21','Daniel','Tucker','Male','1974-05-14T06:50:58Z','28 Wilfred Road, Manchester CT 06040','DNI','02103770','d.tucker@randatmail.com','771-5605-30','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('b9d0616b-6364-4e03-ad3d-e43d5f702697','Deanna','Taylor','Female','2021-06-07T16:48:05Z','9401 3rd Street Road, Louisville KY 40272','DNI','08254457','d.taylor@randatmail.com','515-6936-38','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('ba71e7b2-2c48-4fee-b69c-16c462475b91','Kate','Ferguson','Female','2022-12-24T07:56:36Z','2034 Fairfax Road, Annapolis MD 21401','DNI','09022193','k.ferguson@randatmail.com','270-5083-00','2023-01-23T10:54:27Z');
insert into customers (id, first_name, last_name,gender, birth_date,address, document_type, document_number, email,phone, creation_timestamp) values ('d2370802-b86c-4177-96de-67acc66bea26','Olivia','Jones','Female','1973-04-19T01:56:11Z','2703 Woolsey Street, Berkeley CA 94705','DNI','01235533','o.jones@randatmail.com','397-6876-69','2023-01-23T10:54:27Z');


insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('b34f1b00-c767-4862-89ef-2c201222a7d0','+51-955-597-524','2f1b862e-57df-417c-a98a-67ebc8ad3aae','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('59ed1e44-61cb-4c0f-9274-78c94c05ad6c','+51-955-557-747','e0ef38de-1b1d-4b68-b7a3-40b2460bc043','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('f026e9a0-911d-46da-a26c-9cfae86ebfba','+51-955-500-084','5ea2bef1-b694-4b0c-98aa-b0fa85fe5826','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('e3fc9ee4-a238-40ba-9756-1e6d86af3a08','+51-955-568-976','af33284c-fa27-4827-9731-3fc98f60f1ce','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('49f362eb-2584-4b84-ad57-5974a4efb4fd','+51-955-521-285','713f92af-119f-49b1-9ece-33736f3281fd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('8d3d13ea-60b5-406c-8e59-ed98b7b16792','+51-955-566-572','4dd2063a-fd60-40ad-9c7f-9267af090512','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('3ec61b8d-4031-412d-b117-2e57f0555ec2','+51-955-503-683','60f98a5d-90fe-439d-a874-dcd248e3a7a2','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('8a9f1f32-6b9a-4d7d-8352-73ef5f6fab16','+51-955-544-340','629f0152-0364-4a3e-89e8-07e75d681ade','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('769ee631-5321-420f-b7d7-10ac119e844b','+51-955-527-825','71f0c72d-9db9-4ccd-9a9d-ea65b6cd0817','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('74b1f76f-6b2c-4ab2-81cc-93ef37290d7c','+51-955-575-215','6a1056c0-d6e6-493f-945e-58c4da5d1da2','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('755c4ca2-cd52-4aa0-8a01-2388704ac32d','+51-955-520-933','1cbc1ae9-b185-4fd4-9eb2-6a2c187c2b44','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('dac05fb5-a5c5-429e-be28-3a896bf2a921','+51-955-575-183','8288395f-3116-4278-88ff-31c666b265dd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('c5b4dd7d-f3de-4eed-afe5-1400665e9813','+51-955-551-652','a92a2484-6aa1-4725-a3fc-e765b9d3ed21','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('84b6f5a3-adba-44de-a5a1-c924b4daed12','+51-955-565-250','c0a4f3e0-7b66-4df5-9091-3f06418ad04a','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('92df66fc-e5cb-47fa-9c19-0c475448e6f4','+51-955-557-967','4ebc7349-3b28-441c-92f6-452f74a58275','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('6f3257a0-ffe4-4949-ba61-b6076ec552dd','+51-955-536-448','811c96c0-696f-4b97-8c45-b26d4a2dd0b8','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('c9c3def4-0603-4ff6-89aa-3dd4be3b84fc','+51-955-507-215','0ce008c0-2617-43c2-9184-e16756ef19e7','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('27fa3cd3-8d76-432d-b136-4248a8093c11','+51-955-547-408','5bf0b5bb-b173-43c4-8abb-f3e5d8af9ab7','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('d51f4c99-1d06-4b0a-bcd0-daff4dcdb029','+51-955-530-431','8381d387-8d5d-4026-aa33-b15a580662ff','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('847c484c-cf18-4fd5-b2c3-089d68e760d1','+51-955-547-135','8337787b-ae38-4d45-a331-0ea0452f9236','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('725acbc0-bafb-4526-a32f-f30f8e06916a','+51-955-565-366','6a3e6107-1540-4af5-9153-6e1a9527ebc2','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('8d2e518a-cf0d-4705-8cfe-69b49a97fc89','+51-955-536-852','24e9509a-400f-4a80-b4ef-fb6e2457faa4','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('bbb1cb66-bc19-47da-aa2f-0a7587549080','+51-955-584-300','74fd6fb7-ba11-4d9f-a71e-1ed501a059fa','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('30e84108-f52c-460d-b2e2-bf578f711c0a','+51-955-588-409','4c40d525-ae8b-4f40-9d04-6f7cec3a9db3','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('530dd2de-db73-4db7-962f-1498bac26cd7','+51-955-590-181','593f861a-f448-44b0-8370-8f5caa8633cd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('dbe525c4-d5be-4dc0-baf8-d87bc0afee25','+51-955-549-114','4f668c72-3a7d-4a84-b45c-1c169288e70d','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('5b0294e4-c7de-4b0f-b9d3-a565c70d98c4','+51-955-575-686','a08b3803-dc3a-43e3-a7f9-12b4b5d1c5fe','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('624a9b5b-93c4-4eab-8a22-ac54fa12874a','+51-955-514-088','a903e62a-516b-4f8f-b3c6-ccefb25f6e16','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('5dd8fcdf-a323-4545-a7eb-72d33235f4c6','+51-955-559-239','7e5ef5c6-fd51-469d-8ff8-5669fa336502','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('4563760b-9dd4-4cc4-b533-653a2d6c6f0a','+51-955-564-396','ff779f57-7b32-4ac5-b696-12669090d8b3','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('eaa7d763-4c36-46c0-bcf5-ace49fb93ce9','+51-955-595-629','758e45fc-c2ec-401c-b984-463c20dfd4f2','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('513e9183-6027-4284-b164-87b84ed5e3ef','+51-955-550-175','b363f82c-7c28-4212-a309-e626b36c1ff6','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('82f1b952-f9ac-49a3-9ddb-998a7791df32','+51-955-553-225','d6ef1a53-b16f-4635-8118-a2a45bda7345','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('10a3e7d2-3614-49d3-8919-3d242f648053','+51-955-525-264','7fcc9533-dfe3-4de0-8b69-b9b26a810cae','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('b1eec084-929e-4dd9-abfe-c5a0ff5909b1','+51-955-517-719','328a5f11-7c17-4dc9-9e3d-b61c4773794c','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('40a33ef3-78d8-44e7-817a-1ba6fd19aaf9','+51-955-580-099','d086371d-7ffe-4d8a-b8e9-bf4df105c8cd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('28483a54-b6af-474e-a6fa-c3b79d5e7804','+51-955-530-224','b6a94aa9-33d3-402c-b760-039249703931','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('5320c8cc-edd1-4c7f-8af2-b49025b2dc16','+51-955-581-653','1388311f-e240-4ad8-98d4-f338ad5421c4','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('2591fc48-5dc4-44c2-a6d7-86f16e18b1a4','+51-955-577-455','92dc47cb-27fd-4334-869f-7901eb8c1d72','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('f56f95c5-8e10-44b2-9651-36c0a9706388','+51-955-531-658','04c5f99c-b0a9-463c-a6d9-b9083e2b465e','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('bddaa6f7-4abd-4a90-a266-2abbdac061a7','+51-955-582-949','6ab48be6-0fd3-411b-a508-018471f504e6','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('03543c54-0e16-42cd-b9ef-67f12bfed6c6','+51-955-597-472','805a8e95-b92e-462b-ad32-f66e327ce6cf','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('cdeed583-97b2-4ebd-8232-e8433ee0a770','+51-955-589-056','3c2add9f-05ab-485b-8b3d-0586cd0098fd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('cc864f89-9a16-496a-a8c1-add39a247647','+51-955-540-473','b46fe923-28a3-4bc8-8598-785bb4818fde','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('6029b169-0673-40aa-a8f6-161c9399d4a9','+51-955-567-975','70eefc47-9b4d-4408-8771-3aae71093c34','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('b0f8c795-79a4-4054-87b2-fd3cc82e1346','+51-955-550-345','c1b84b05-f064-4f27-86f2-f6e9d379c2f5','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('9cbc6041-7177-48ad-bd9f-69e073824dc1','+51-955-505-010','29f18143-046d-4d1e-901c-860bba36ba21','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('38f753b6-fb01-40c2-b3cb-866a726418ec','+51-955-539-588','b9d0616b-6364-4e03-ad3d-e43d5f702697','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('3eb14e61-74ed-4a6e-a18d-40586bb315c0','+51-955-598-174','ba71e7b2-2c48-4fee-b69c-16c462475b91','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('f00f2b0e-17f0-47ec-adf1-7324dd3015ed','+51-955-556-169','d2370802-b86c-4177-96de-67acc66bea26','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('d1308354-3cb2-4f41-8ad8-8c3a23fc2ffd','+51-955-507-567','2f1b862e-57df-417c-a98a-67ebc8ad3aae','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('c9c68cb8-d689-484d-81e8-3cad039a73ab','+51-955-559-314','e0ef38de-1b1d-4b68-b7a3-40b2460bc043','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('539151e7-dcf5-4b55-a075-7e02f1db8e92','+51-955-572-867','5ea2bef1-b694-4b0c-98aa-b0fa85fe5826','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('b8d9f6e5-3e51-4dfc-b785-151bc8f13876','+51-955-511-236','af33284c-fa27-4827-9731-3fc98f60f1ce','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('450aff93-0881-4e83-89c2-ef0028f68558','+51-955-538-795','713f92af-119f-49b1-9ece-33736f3281fd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('18d68ae2-a8e1-4544-9dbf-e030474839eb','+51-955-565-558','4dd2063a-fd60-40ad-9c7f-9267af090512','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('ac5353d8-e2d3-4353-9cdb-651ded563712','+51-955-572-314','60f98a5d-90fe-439d-a874-dcd248e3a7a2','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('836ed7fd-12f8-487a-a2c1-eebde13ef694','+51-955-503-906','629f0152-0364-4a3e-89e8-07e75d681ade','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('8eede740-1519-47b7-a2e7-8995a40c8955','+51-955-569-517','71f0c72d-9db9-4ccd-9a9d-ea65b6cd0817','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('b5235cd3-1b0b-4bb7-9c6b-34030fdbdbee','+51-955-595-586','6a1056c0-d6e6-493f-945e-58c4da5d1da2','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('ff36b88b-2449-4e10-8349-04e262e65416','+51-955-515-041','1cbc1ae9-b185-4fd4-9eb2-6a2c187c2b44','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('fa12243d-f220-4e65-97c5-167d96fb379b','+51-955-595-524','8288395f-3116-4278-88ff-31c666b265dd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('d0e0a889-17d9-435e-b18c-e4b8be1ec762','+51-955-527-865','a92a2484-6aa1-4725-a3fc-e765b9d3ed21','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('272b7e86-1e2f-4830-8197-f411c1fc94cb','+51-955-541-463','c0a4f3e0-7b66-4df5-9091-3f06418ad04a','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('8b8e90e3-979d-44f1-909e-718e6108aeb1','+51-955-569-713','4ebc7349-3b28-441c-92f6-452f74a58275','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('8f575fe1-a0c5-41d6-9d72-141643019bf0','+51-955-577-610','811c96c0-696f-4b97-8c45-b26d4a2dd0b8','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('2b78c811-efe2-47a5-bd23-d24590f2a100','+51-955-592-143','0ce008c0-2617-43c2-9184-e16756ef19e7','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('a0b9f314-6d66-458d-a5be-6f42d998c4f8','+51-955-576-346','5bf0b5bb-b173-43c4-8abb-f3e5d8af9ab7','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('a4d7538e-a53a-4c5f-9bb0-8eeb7648e865','+51-955-520-186','8381d387-8d5d-4026-aa33-b15a580662ff','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('8424a43a-c9e2-4159-b69b-06e1d65468d6','+51-955-572-852','8337787b-ae38-4d45-a331-0ea0452f9236','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('c370eac1-05cf-4e75-8655-8d6fbc9b973e','+51-955-564-835','6a3e6107-1540-4af5-9153-6e1a9527ebc2','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('9089e67c-af4d-4fe8-9c9c-ac8d7349a27b','+51-955-518-912','24e9509a-400f-4a80-b4ef-fb6e2457faa4','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('25576dbd-a712-49ac-91d8-a1d8430ca2af','+51-955-521-705','74fd6fb7-ba11-4d9f-a71e-1ed501a059fa','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('1658ee20-2bfc-4714-be02-32b68903f509','+51-955-547-598','4c40d525-ae8b-4f40-9d04-6f7cec3a9db3','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('f012282f-7d1a-4b1f-abee-77fefdcfed54','+51-955-596-353','593f861a-f448-44b0-8370-8f5caa8633cd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('3c4fb0ef-9a21-4a0b-868f-8de4927e1804','+51-955-556-760','4f668c72-3a7d-4a84-b45c-1c169288e70d','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('734b18c0-7bb5-4f72-b81d-18de3c7bbc81','+51-955-530-098','a08b3803-dc3a-43e3-a7f9-12b4b5d1c5fe','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('5109b90b-c3da-47f3-b3f5-d3d4754e7240','+51-955-570-398','a903e62a-516b-4f8f-b3c6-ccefb25f6e16','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('1455649d-5d5e-433b-9759-b05859494420','+51-955-582-755','7e5ef5c6-fd51-469d-8ff8-5669fa336502','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('0164538c-0119-4555-b15e-a8dd3cd7d3d4','+51-955-551-818','ff779f57-7b32-4ac5-b696-12669090d8b3','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('d36bc3b2-aa90-4e53-a932-0f2638760fc5','+51-955-519-708','758e45fc-c2ec-401c-b984-463c20dfd4f2','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('dfb4ee5f-6fe4-4032-ab77-f7d82d538758','+51-955-569-521','b363f82c-7c28-4212-a309-e626b36c1ff6','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('4b13a3d8-c0f1-4c3a-905d-16731ab8696f','+51-955-513-240','d6ef1a53-b16f-4635-8118-a2a45bda7345','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('2c5a46a4-471f-4b2a-aca3-086cf8a171fd','+51-955-508-578','7fcc9533-dfe3-4de0-8b69-b9b26a810cae','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('620d3f9e-d6fb-4921-8a84-48f898220ca4','+51-955-572-567','328a5f11-7c17-4dc9-9e3d-b61c4773794c','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('f07d6e09-731a-4282-977f-024e7cb67b5c','+51-955-559-086','d086371d-7ffe-4d8a-b8e9-bf4df105c8cd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('456a0b41-1276-4ee0-8f98-3a4d2d98f079','+51-955-509-026','b6a94aa9-33d3-402c-b760-039249703931','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('4cc1bff4-6c55-4be7-b40b-5550f96ff995','+51-955-553-816','1388311f-e240-4ad8-98d4-f338ad5421c4','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('332fcf8e-c82f-4168-a8a6-30c1d996c1e0','+51-955-515-838','92dc47cb-27fd-4334-869f-7901eb8c1d72','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('a0f395bf-75c8-4ac5-8bba-b75d8fa0f853','+51-955-520-758','04c5f99c-b0a9-463c-a6d9-b9083e2b465e','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('2c1ae9eb-7582-4ef0-87cc-b0f52fdb1792','+51-955-583-183','6ab48be6-0fd3-411b-a508-018471f504e6','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('087078a4-6dd4-4543-9e9a-0f88a119e9a5','+51-955-557-246','805a8e95-b92e-462b-ad32-f66e327ce6cf','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('c7c72394-5d50-424a-8041-2922d141502e','+51-955-582-786','3c2add9f-05ab-485b-8b3d-0586cd0098fd','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('6081c206-39bf-41ae-82fb-4bd19c182c20','+51-955-532-017','b46fe923-28a3-4bc8-8598-785bb4818fde','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('207231d2-740d-4304-9e8c-d1782f617a2b','+51-955-501-300','70eefc47-9b4d-4408-8771-3aae71093c34','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('6ae1791a-6fff-40d7-9463-3ed065ddbb93','+51-955-580-987','c1b84b05-f064-4f27-86f2-f6e9d379c2f5','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('a7adb98f-cb3a-44de-a732-4fa161675002','+51-955-538-856','29f18143-046d-4d1e-901c-860bba36ba21','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('3eb7ada4-ac78-4db9-90d1-61ce6875234c','+51-955-522-379','b9d0616b-6364-4e03-ad3d-e43d5f702697','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('99019ea2-2417-4616-8ba0-ae07e2aeff68','+51-955-594-769','ba71e7b2-2c48-4fee-b69c-16c462475b91','2023-01-23T10:54:27Z');
insert into customers_phones(id,phone,customer_id,creation_timestamp) values ('e8640cc8-72cc-4e18-935c-95efa94f8157','+51-955-536-650','d2370802-b86c-4177-96de-67acc66bea26','2023-01-23T10:54:27Z');


















































