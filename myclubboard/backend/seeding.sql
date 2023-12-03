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
INSERT INTO club (name, logo, university_id) VALUES ('CSUF ACM', 'https://acmcsuf.com/assets/badges/general-badge.svg', 1);
INSERT INTO club (name, logo, university_id) VALUES ('CSULB ACM', 'https://csulb.acm.org/acm.png', 2);
INSERT INTO club (name, logo, university_id) VALUES ('CSUF VGDC', 'https://pbs.twimg.com/profile_images/1036524407080988673/GPY1Jbn0_400x400.jpg', 1);
INSERT INTO club (name, logo, university_id) VALUES ('CSUF ASI', 'https://csufaicc.files.wordpress.com/2018/02/asi_csuf_alternate_logo-041.png?w=332&h=332', 1);

-- Create table for club lead including name, email, club_id with foreign key to club table
CREATE TABLE club_lead (
    id  INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    club_id INT NOT NULL,
    KEY club_id_idx (club_id)
);

-- Populate some data, add ACM CSUF club leads
INSERT INTO club_lead (name, email, club_id) VALUES ('Daniel Truong', 'aduy1122@gmail.com', 1);

-- Create job posting table for each club
CREATE TABLE posting (
    id  INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    qualification VARCHAR(255) NOT NULL,
    tools VARCHAR(500) NOT NULL,
    responsibilities VARCHAR(500) NOT NULL,
    posted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    posted_by VARCHAR(255) NOT NULL,
    club_id INT NOT NULL,
    apply_link VARCHAR(255) NOT NULL,
    KEY club_id_idx (club_id)
);

-- Populate some data, add ACM CSUF job postings
INSERT INTO posting (title, qualification, tools, responsibilities, posted_by, apply_link, club_id) VALUES ('Web Officer', 'Passion for web development and open source projects # Open to learning new technologies # Ability to work in a team and to teach others ', 'Google Drive/Docs: To collaborate on presentations, documents, and spreadsheets # Discord: Internal team communication, assistance for student questions # GitHub: To collaborate on code, manage projects, and teach students how to use it', 'Work closely with the Webmaster to maintain the ACM website and OSS projects # Understand the Git workflow and be able to teach it to others # Attend weekly meetings and provide updates on projects', 'Daniel Truong', 'https://docs.google.com/forms/d/e/1FAIpQLScXL7bpnHNwRZmViVCHp7PVz0JnN5c-sSIbxfziwJXUMrX7zA/viewform', 1);
INSERT INTO posting (title, qualification, tools, responsibilities, posted_by, apply_link, club_id) VALUES ('AI Officer', 'Passion for web development and open source projects # Open to learning new technologies # Ability to work in a team and to teach others ', 'Google Drive/Docs: To collaborate on presentations, documents, and spreadsheets # Discord: Internal team communication, assistance for student questions # GitHub: To collaborate on code, manage projects, and teach students how to use it', 'Work closely with the Webmaster to maintain the ACM website and OSS projects # Understand the Git workflow and be able to teach it to others # Attend weekly meetings and provide updates on projects', 'Daniel Truong', 'https://docs.google.com/forms/d/e/1FAIpQLScXL7bpnHNwRZmViVCHp7PVz0JnN5c-sSIbxfziwJXUMrX7zA/viewform',3);
INSERT INTO posting (title, qualification, tools, responsibilities, posted_by, apply_link, club_id) VALUES ('Building Manager', 'Must be a student at CSUF and is enrolled/registered in a current regular semester as a new or continuing student.', 'vulputate sapien nec sagittis aliquam malesuada.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Pharetra magna ac placerat vestibulum lectus mauris. Donec et odio pellentesque diam volutpat commodo. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.', 'Daniel Truong','', 4);

-- 