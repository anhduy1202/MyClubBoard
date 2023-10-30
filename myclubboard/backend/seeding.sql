-- Create table for university including state, name, logo with foreign key to club table
CREATE TABLE university (
    id  INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL
);

-- Populate some data, add Cal State Fullerton
INSERT INTO university (location, state, name, logo) VALUES ('Fullerton','CA', 'Cal State Fullerton', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/California_State_University%2C_Fullerton_seal.svg/640px-California_State_University%2C_Fullerton_seal.svg.png');
INSERT INTO university (location, state, name, logo) VALUES ('Long Beach','CA', 'Cal State Long Beach', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/CSU-Longbeach_seal.svg/800px-CSU-Longbeach_seal.svg.png');
INSERT INTO university (location, state, name, logo) VALUES ('Irvine','CA', 'University California, Irvine', 'https://upload.wikimedia.org/wikipedia/en/0/0e/University_of_California%2C_Irvine_seal.svg');
INSERT INTO university (location,state, name, logo) VALUES ('Los Angeles', 'CA', 'University California, LA', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/UCLA_Bruins_primary_logo.svg/1200px-UCLA_Bruins_primary_logo.svg.png');
INSERT INTO university (location,state, name, logo) VALUES ('Princeton', 'NJ', 'Princeton University', 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg');


-- Create table for club including name, logo, university_id with foreign key to university table
CREATE TABLE club (
    id  INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL,
    university_id INT NOT NULL,
    KEY university_id_idx (university_id)
);

-- Populate some data, add Cal State Fullerton clubs
INSERT INTO club (name, logo, university_id) VALUES ('CSUF ACM', 'https://acmcsuf.com/assets/badges/general.svg', 1);

-- Create job posting table for each club
-- CREATE TABLE position (
--     id  INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     club_id INT NOT NULL,
--     KEY club_id_idx (club_id)
-- );

-- -- Populate some data, add ACM CSUF job postings
-- INSERT INTO position (title, description, club_id) VALUES ('Dev Team Lead', 'Leading the Dev Team to host Dev workshops', 1);