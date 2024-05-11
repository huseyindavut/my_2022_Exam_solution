

INSERT INTO Vare (Varenavn,Pris, Antall)
VALUES ('Rosinbolle',30,100);

INSERT INTO Kunde (Nanv, Mobil,Epost,Passord)
VALUES ('Ole','99999999', 'we234@wsre.sr','1qaz');

Insert  INTO Bestilling (KID, Bord, Mottatt,Varer)
VALUES (1,42,PARSEDATETIME('23-05-2022 15:00:00', 'dd-MM-yyyy hh:mm:ss'), '1');