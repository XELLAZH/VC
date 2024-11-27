create TABLE Users (
    id SERIAL PRIMARY KEY,
    user_login VARCHAR(255),
    user_password VARCHAR(255),
    user_role VARCHAR(12)
);

create TABLE Teams (
    id SERIAL PRIMARY KEY,
    team_name VARCHAR(255),
    capitan_id INTEGER,
    coach_id INTEGER,
    rating_points INTEGER,
    FOREIGN KEY (capitan_id) REFERENCES Performers (user_id),
    FOREIGN KEY (coach_id) REFERENCES Performers (user_id)
);

create TABLE Performers (
    user_id INTEGER PRIMARY KEY,
    fullname VARCHAR(255),
    birth_year SMALLINT,
    study_group VARCHAR(8),
    nickname VARCHAR(8),
    ingame_rank VARCHAR(8),
    team_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users (id),
    FOREIGN KEY (team_id) REFERENCES Teams (id)
);

ALTER TABLE Performers ADD CONSTRAINT FOREIGN KEY (team_id) REFERENCES Teams (id);