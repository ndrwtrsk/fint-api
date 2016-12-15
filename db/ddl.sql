-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2016-11-22 19:42:27.383

-- tables
-- Table: Fint_Group
CREATE TABLE Fint_Group (
    id serial  NOT NULL,
    owner_uid varchar(255)  NOT NULL,
    name varchar(255)  NOT NULL,
    CONSTRAINT id PRIMARY KEY (id)
);

-- Table: Fint_User
CREATE TABLE Fint_User (
    uid varchar(255)  NOT NULL,
    name varchar(50)  NOT NULL,
    photoUrl text  NOT NULL,
    CONSTRAINT uid PRIMARY KEY (uid)
);

-- Table: Fint_Users_Groups
CREATE TABLE Fint_Users_Groups (
    user_uid varchar(255)  NOT NULL,
    group_id int  NOT NULL,
    CONSTRAINT user_group_pk PRIMARY KEY (user_uid,group_id)
);

-- Table: Group_Expense
CREATE TABLE Group_Expense (
    id bigserial  NOT NULL,
    value int  NOT NULL,
    datetime timestamp  NOT NULL,
    description varchar(255)  NOT NULL DEFAULT '',
    group_id int  NOT NULL,
    user_uid varchar(255)  NOT NULL,
    category_id int  NOT NULL,
    CONSTRAINT Group_Expense_pk PRIMARY KEY (id)
);

-- Table: Group_Expense_Category
CREATE TABLE Group_Expense_Category (
    id serial  NOT NULL,
    name varchar(255)  NOT NULL DEFAULT '',
    group_id int  NOT NULL,
    CONSTRAINT Group_Expense_Category_pk PRIMARY KEY (id)
);

-- Table: Group_Expense_Comment
CREATE TABLE Group_Expense_Comment (
    id serial  NOT NULL,
    user_uid varchar(255)  NOT NULL,
    expense_id int8  NOT NULL,
    datetime timestamp  NOT NULL,
    content text  NOT NULL,
    CONSTRAINT Group_Expense_Comment_pk PRIMARY KEY (id)
);

-- Table: Group_Income
CREATE TABLE Group_Income (
    id bigserial  NOT NULL,
    value int  NOT NULL,
    datetime timestamp  NOT NULL,
    description varchar(255)  NOT NULL DEFAULT '',
    group_id int  NOT NULL,
    user_uid varchar(255)  NOT NULL,
    category_id int  NOT NULL,
    CONSTRAINT Group_Income_pk PRIMARY KEY (id)
);

-- Table: Group_Income_Category
CREATE TABLE Group_Income_Category (
    id serial  NOT NULL,
    name varchar(255)  NOT NULL DEFAULT '',
    group_id int  NOT NULL,
    CONSTRAINT Group_Income_Category_pk PRIMARY KEY (id)
);

-- Table: Group_Income_Comment
CREATE TABLE Group_Income_Comment (
    id serial  NOT NULL,
    user_uid varchar(255)  NOT NULL,
    income_id int8  NOT NULL,
    datetime timestamp  NOT NULL,
    content text  NOT NULL,
    CONSTRAINT Group_Income_Comment_pk PRIMARY KEY (id)
);

-- Table: Personal_Expense
CREATE TABLE Personal_Expense (
    id bigserial  NOT NULL,
    value int  NOT NULL,
    datetime timestamp  NOT NULL,
    description varchar(255)  NOT NULL DEFAULT '',
    user_uid varchar(255)  NOT NULL,
    category_id int  NOT NULL,
    CONSTRAINT Personal_Expense_pk PRIMARY KEY (id)
);

-- Table: Personal_Expense_Category
CREATE TABLE Personal_Expense_Category (
    id serial  NOT NULL,
    name varchar(255)  NOT NULL DEFAULT '',
    user_uid varchar(255)  NOT NULL,
    CONSTRAINT Personal_Expense_Category_pk PRIMARY KEY (id)
);

-- Table: Personal_Income
CREATE TABLE Personal_Income (
    id bigserial  NOT NULL,
    value int  NOT NULL,
    datetime timestamp  NOT NULL,
    description varchar(255)  NOT NULL DEFAULT '',
    user_uid varchar(255)  NOT NULL,
    category_id int  NOT NULL,
    CONSTRAINT Personal_Income_pk PRIMARY KEY (id)
);

-- Table: Personal_Income_Category
CREATE TABLE Personal_Income_Category (
    id serial  NOT NULL,
    name varchar(255)  NOT NULL DEFAULT '',
    user_uid varchar(255)  NOT NULL,
    CONSTRAINT Personal_Income_Category_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: Group_Expense_Category_Group (table: Group_Expense_Category)
ALTER TABLE Group_Expense_Category ADD CONSTRAINT Group_Expense_Category_Group
    FOREIGN KEY (group_id)
    REFERENCES Fint_Group (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Expense_Comment_Group_Expense (table: Group_Expense_Comment)
ALTER TABLE Group_Expense_Comment ADD CONSTRAINT Group_Expense_Comment_Group_Expense
    FOREIGN KEY (expense_id)
    REFERENCES Group_Expense (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Expense_Comment_User (table: Group_Expense_Comment)
ALTER TABLE Group_Expense_Comment ADD CONSTRAINT Group_Expense_Comment_User
    FOREIGN KEY (user_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Expense_Group (table: Group_Expense)
ALTER TABLE Group_Expense ADD CONSTRAINT Group_Expense_Group
    FOREIGN KEY (group_id)
    REFERENCES Fint_Group (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Expense_Group_Expense_Category (table: Group_Expense)
ALTER TABLE Group_Expense ADD CONSTRAINT Group_Expense_Group_Expense_Category
    FOREIGN KEY (category_id)
    REFERENCES Group_Expense_Category (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Expense_User (table: Group_Expense)
ALTER TABLE Group_Expense ADD CONSTRAINT Group_Expense_User
    FOREIGN KEY (user_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Income_Category_Group (table: Group_Income_Category)
ALTER TABLE Group_Income_Category ADD CONSTRAINT Group_Income_Category_Group
    FOREIGN KEY (group_id)
    REFERENCES Fint_Group (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Income_Comment_Group_Income (table: Group_Income_Comment)
ALTER TABLE Group_Income_Comment ADD CONSTRAINT Group_Income_Comment_Group_Income
    FOREIGN KEY (income_id)
    REFERENCES Group_Income (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Income_Comment_User (table: Group_Income_Comment)
ALTER TABLE Group_Income_Comment ADD CONSTRAINT Group_Income_Comment_User
    FOREIGN KEY (user_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Income_Group (table: Group_Income)
ALTER TABLE Group_Income ADD CONSTRAINT Group_Income_Group
    FOREIGN KEY (group_id)
    REFERENCES Fint_Group (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Income_Group_Income_Category (table: Group_Income)
ALTER TABLE Group_Income ADD CONSTRAINT Group_Income_Group_Income_Category
    FOREIGN KEY (category_id)
    REFERENCES Group_Income_Category (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Group_Income_User (table: Group_Income)
ALTER TABLE Group_Income ADD CONSTRAINT Group_Income_User
    FOREIGN KEY (user_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Personal_Expense_Category_User (table: Personal_Expense_Category)
ALTER TABLE Personal_Expense_Category ADD CONSTRAINT Personal_Expense_Category_User
    FOREIGN KEY (user_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Personal_Expense_Personal_Expense_Category (table: Personal_Expense)
ALTER TABLE Personal_Expense ADD CONSTRAINT Personal_Expense_Personal_Expense_Category
    FOREIGN KEY (category_id)
    REFERENCES Personal_Expense_Category (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Personal_Expense_User (table: Personal_Expense)
ALTER TABLE Personal_Expense ADD CONSTRAINT Personal_Expense_User
    FOREIGN KEY (user_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Personal_Income_Category_User (table: Personal_Income_Category)
ALTER TABLE Personal_Income_Category ADD CONSTRAINT Personal_Income_Category_User
    FOREIGN KEY (user_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Personal_Income_Personal_Income_Category (table: Personal_Income)
ALTER TABLE Personal_Income ADD CONSTRAINT Personal_Income_Personal_Income_Category
    FOREIGN KEY (category_id)
    REFERENCES Personal_Income_Category (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: Personal_Income_User (table: Personal_Income)
ALTER TABLE Personal_Income ADD CONSTRAINT Personal_Income_User
    FOREIGN KEY (user_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: UserGroups_Group (table: Fint_Users_Groups)
ALTER TABLE Fint_Users_Groups ADD CONSTRAINT UserGroups_Group
    FOREIGN KEY (group_id)
    REFERENCES Fint_Group (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: UserGroups_User (table: Fint_Users_Groups)
ALTER TABLE Fint_Users_Groups ADD CONSTRAINT UserGroups_User
    FOREIGN KEY (user_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: group_owner (table: Fint_Group)
ALTER TABLE Fint_Group ADD CONSTRAINT group_owner
    FOREIGN KEY (owner_uid)
    REFERENCES Fint_User (uid)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- End of file.
