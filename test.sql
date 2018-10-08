CREATE TABLE "members" (
  id SERIAL PRIMARY KEY,
  name varchar(255) default NULL,
  company varchar(255)
);
INSERT INTO "members" (name,company) VALUES ('Kaitlin','A Enim Institute'),('Dolan','Amet Industries'),('Asher','Cursus Inc.'),('Cullen','Dapibus Id Blandit Corp.'),('Blossom','Pharetra Sed Limited'),('Rudyard','A Dui Institute'),('Lenore','Vulputate Eu Institute'),('Remedios','Tincidunt Consulting'),('Lynn','Tristique Pharetra Quisque Corp.'),('Hanna','Nisi Aenean Eget Industries');
INSERT INTO "members" (name,company) VALUES ('Eve','Ligula Incorporated'),('Carissa','Consequat Purus Associates'),('Imogene','Duis Elementum Dui Foundation'),('Marny','Montes Nascetur Industries'),('Kalia','Sit Amet Company'),('Heather','Orci Sem Eget Consulting'),('Arsenio','Justo Limited'),('Thane','Rutrum Institute'),('Tobias','In Ornare Ltd'),('Olivia','Quis Massa Mauris Consulting');
INSERT INTO "members" (name,company) VALUES ('Kibo','Malesuada Vel Venenatis LLP'),('Nora','Neque Sed Company'),('Hope','Iaculis Quis Company'),('Natalie','Ut Corp.'),('Talon','Est Arcu LLP'),('Caldwell','Dui Fusce Corporation'),('Octavia','Enim Commodo LLP'),('Christine','Curabitur Ltd'),('Kelly','Pharetra Corp.'),('Owen','Risus Company');
INSERT INTO "members" (name,company) VALUES ('Norman','Arcu Ltd'),('Emerald','Id Risus Limited'),('Devin','Sit Corporation'),('Logan','Id Libero Consulting'),('Duncan','Neque Sed Sem LLP'),('Acton','Blandit Nam Nulla Institute'),('Karina','Pellentesque Consulting'),('Cecilia','Fermentum Company'),('Mariam','Accumsan Interdum Ltd'),('Kai','Integer Mollis Integer Industries');
INSERT INTO "members" (name,company) VALUES ('Abel','Fermentum Arcu Vestibulum Company'),('Quemby','Eros Proin Ultrices Associates'),('Breanna','Aliquam Institute'),('Stacey','Curabitur Institute'),('Tyrone','Malesuada Fames Ltd'),('Merrill','Nunc Mauris Sapien Ltd'),('Bradley','Eu LLP'),('Lars','Vitae Posuere At Associates'),('Tatiana','In Mi Industries'),('Jayme','Mus Incorporated');
INSERT INTO "members" (name,company) VALUES ('Rae','Elementum Foundation'),('Brynne','Sed Turpis Ltd'),('Minerva','Erat Vel Pede Ltd'),('Yolanda','Magnis Dis Industries'),('Mariko','Varius LLC'),('Zephr','Mauris Ut Consulting'),('Roary','Nulla Vulputate Dui Corporation'),('Tyler','In Faucibus Orci Foundation'),('Urielle','Ante PC'),('Sydnee','Cubilia Curae; Donec Inc.');
INSERT INTO "members" (name,company) VALUES ('Oscar','Aenean Gravida Nunc Ltd'),('Cameron','Rhoncus Nullam Incorporated'),('Janna','Accumsan LLC'),('Wade','Interdum Enim Corp.'),('Hiroko','Porttitor Vulputate Posuere Corporation'),('Zephania','Nulla LLC'),('Ahmed','Ligula Incorporated'),('Mechelle','Congue Turpis In Corp.'),('Jack','Id Corp.'),('Logan','Enim Etiam Imperdiet PC');
INSERT INTO "members" (name,company) VALUES ('Dillon','Mauris Company'),('Vivien','Pede Malesuada LLP'),('Benedict','Mollis Integer Tincidunt Industries'),('Fallon','Commodo Inc.'),('Dawn','Etiam Laoreet Libero Foundation'),('Connor','Fermentum Arcu Corp.'),('Hermione','A Incorporated'),('Kenyon','Quis Consulting'),('Michael','Dui Institute'),('Gloria','Erat Vivamus Consulting');
INSERT INTO "members" (name,company) VALUES ('Alice','Pellentesque Ultricies Company'),('Heather','Metus Aliquam Inc.'),('Desiree','Arcu Institute'),('Lois','Fermentum Metus Ltd'),('Mannix','Dignissim Lacus Inc.'),('Alisa','Est Ac Incorporated'),('Signe','Dapibus Institute'),('Drew','Aliquam LLP'),('Brynn','Nibh Enim Gravida Industries'),('Adrian','Amet LLC');
INSERT INTO "members" (name,company) VALUES ('Regan','Nulla Institute'),('Scarlett','Eu Turpis Nulla Foundation'),('Tanya','Arcu Vivamus Limited'),('Alfonso','Suspendisse Non Leo Company'),('Renee','Lectus Nullam Inc.'),('Wylie','Porttitor Limited'),('Rigel','Mauris Ut Limited'),('Vance','Pede Limited'),('Riley','Pede Ac Urna Inc.'),('Leila','Felis Donec Tempor Ltd');




CREATE TABLE "visitors" (
  id SERIAL PRIMARY KEY,
  name varchar(255) default NULL,
  reason TEXT default NULL,
  email varchar(255) default NULL,
  phone varchar(100) default NULL
);

INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','hendrerit','auctor.velit.eget@dictumeuplacerat.ca','phone'),('name','dictum','dolor.dapibus@commodo.co.uk','phone'),('name','Aliquam','a@dolordapibusgravida.net','phone'),('name','inceptos','neque.et@IntegermollisInteger.org','phone'),('name','urna','eleifend@sedsem.net','phone'),('name','magna.','velit.Sed@neceuismod.net','phone'),('name','Duis','sapien.Cras@convallisante.net','phone'),('name','egestas.','Suspendisse.eleifend.Cras@risus.net','phone'),('name','magna','mi.lacinia.mattis@consequatauctornunc.edu','phone'),('name','ipsum.','nec@sapien.com','phone');
INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','a,','sed.pede@tellusNunclectus.ca','phone'),('name','fringilla','rutrum@maurisidsapien.ca','phone'),('name','et,','aliquam@musDonec.co.uk','phone'),('name','velit','blandit.viverra@Fuscefermentum.edu','phone'),('name','sem,','enim.Mauris@Curabitur.net','phone'),('name','Sed','ridiculus.mus.Proin@felisadipiscing.org','phone'),('name','elit.','quis.tristique@ac.com','phone'),('name','posuere','arcu.Sed.eu@sociis.edu','phone'),('name','Suspendisse','ac.libero@aliquet.co.uk','phone'),('name','tempus,','consequat@Curae.edu','phone');
INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','convallis','vitae.erat.vel@ipsum.edu','phone'),('name','ac','dui.lectus@egestasurnajusto.com','phone'),('name','consectetuer','Nullam.suscipit.est@duilectusrutrum.ca','phone'),('name','metus','erat@posuere.co.uk','phone'),('name','velit.','tempor@pedenecante.com','phone'),('name','pharetra','eget.magna.Suspendisse@blanditmattis.ca','phone'),('name','eu','eu.eros@ametdiam.com','phone'),('name','Integer','ante.ipsum@imperdiet.co.uk','phone'),('name','volutpat.','sem.mollis.dui@quisarcu.co.uk','phone'),('name','Nulla','consectetuer@enimSed.net','phone');
INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','sollicitudin','eget@portaelita.co.uk','phone'),('name','Ut','aliquet.Proin.velit@risus.ca','phone'),('name','sit','eu.ultrices@maurisInteger.net','phone'),('name','magna','Nunc@habitantmorbi.ca','phone'),('name','arcu','ac.mattis.velit@nonnisiAenean.com','phone'),('name','Donec','nisl.arcu.iaculis@sedpedeCum.com','phone'),('name','Vivamus','et.rutrum@velfaucibus.co.uk','phone'),('name','Phasellus','nec.mollis@noncursusnon.net','phone'),('name','Nunc','arcu.imperdiet@Integervitae.org','phone'),('name','accumsan','nisl.sem@quamPellentesquehabitant.com','phone');
INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','nisi','dictum.eleifend@Nunc.org','phone'),('name','nec','dui.Fusce@urnaVivamus.com','phone'),('name','Sed','pede.Nunc.sed@Proinnislsem.org','phone'),('name','amet','pede@Donecluctusaliquet.edu','phone'),('name','tristique','lorem.ut@sagittissemper.edu','phone'),('name','Quisque','tempus.risus@eu.co.uk','phone'),('name','non','non.enim.commodo@risus.org','phone'),('name','viverra.','egestas.a.scelerisque@insodales.com','phone'),('name','lorem,','a.scelerisque@sollicitudincommodoipsum.co.uk','phone'),('name','dictum','ac.arcu@elitAliquamauctor.ca','phone');
INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','Nam','arcu.imperdiet@id.co.uk','phone'),('name','id','lacus.Etiam@hendreritconsectetuercursus.net','phone'),('name','est','sodales.nisi.magna@diamSed.net','phone'),('name','a','lobortis.quam@leoelementum.edu','phone'),('name','purus','erat.in.consectetuer@acmetusvitae.edu','phone'),('name','Proin','pulvinar@natoquepenatibus.org','phone'),('name','orci.','fringilla.porttitor.vulputate@sagittisNullam.com','phone'),('name','diam.','pharetra.Quisque@nonlobortis.ca','phone'),('name','Cras','egestas@primis.org','phone'),('name','convallis','rhoncus.id@Cumsociisnatoque.co.uk','phone');
INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','magna.','metus.Aenean.sed@ligula.org','phone'),('name','cursus','ante@blanditcongue.com','phone'),('name','Donec','arcu.Nunc.mauris@malesuada.org','phone'),('name','Proin','mus.Aenean.eget@dapibusrutrum.ca','phone'),('name','et','sit.amet@vehiculaet.edu','phone'),('name','mauris','Donec@necmetus.com','phone'),('name','mauris,','amet@dictum.co.uk','phone'),('name','magna.','accumsan.interdum.libero@arcu.com','phone'),('name','dui.','aliquet.libero@Craslorem.net','phone'),('name','nibh.','pharetra.ut.pharetra@telluslorem.edu','phone');
INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','blandit','consequat.dolor.vitae@eget.co.uk','phone'),('name','nulla','Cum.sociis.natoque@sitamet.net','phone'),('name','dapibus','justo@adipiscing.ca','phone'),('name','adipiscing','neque.sed.dictum@liberolacusvarius.ca','phone'),('name','purus.','non.magna@tellus.org','phone'),('name','magnis','Phasellus.in.felis@laoreet.net','phone'),('name','amet','dui.Fusce@ridiculus.co.uk','phone'),('name','Nunc','iaculis.odio.Nam@urnaUt.com','phone'),('name','cursus.','non@congueelitsed.co.uk','phone'),('name','sit','pede@Maurisnondui.com','phone');
INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','vestibulum.','cubilia@odiosemper.org','phone'),('name','vehicula','erat@felisullamcorperviverra.edu','phone'),('name','non','tincidunt@consectetuer.co.uk','phone'),('name','lectus','fringilla@et.org','phone'),('name','Duis','sagittis@velit.org','phone'),('name','ligula.','fermentum.metus.Aenean@pellentesque.net','phone'),('name','sodales','nisi.dictum@anteipsum.net','phone'),('name','nonummy','in@Crasdictumultricies.net','phone'),('name','non,','nulla.at.sem@Namacnulla.edu','phone'),('name','dignissim','dapibus.id@sedleo.edu','phone');
INSERT INTO "visitors" (name,reason,email,phone) VALUES ('name','vehicula','lobortis.mauris.Suspendisse@Nullasempertellus.co.uk','phone'),('name','nunc','lacus.pede@diamProindolor.ca','phone'),('name','ullamcorper.','magna@fringillaDonecfeugiat.co.uk','phone'),('name','dui,','nibh.Donec@eu.net','phone'),('name','at,','faucibus.lectus@iaculis.edu','phone'),('name','mattis','quis@nislarcu.ca','phone'),('name','Ut','Cras.vehicula@volutpatornarefacilisis.net','phone'),('name','morbi','sapien@sit.co.uk','phone'),('name','congue','at@Cras.com','phone'),('name','Sed','amet@vestibulumlorem.edu','phone');


