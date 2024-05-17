use prueva1;


-- Creación de la tabla 'carrera'
CREATE TABLE carrera (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    codigo VARCHAR(10)
);

-- Creación de la tabla 'supervisor'
CREATE TABLE supervisor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    carrera_id INT,
    FOREIGN KEY (carrera_id) REFERENCES carrera(id)
);

-- Creación de la tabla 'persona'
CREATE TABLE persona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    carrera_id INT,
    semestre INT CHECK (semestre BETWEEN 1 AND 6),
    FOREIGN KEY (carrera_id) REFERENCES carrera(id)
);


-- Creación de la tabla 'proyecto'
CREATE TABLE proyecto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_proyecto VARCHAR(255),
    sede VARCHAR(255),
    año INT,
    carrera_id INT,
    semestre INT,
    lider_id INT,
    supervisor_id INT,
    observaciones TEXT,
    descripcion TEXT,
    fecha_inicio DATE,
    fecha_fin DATE,
    tiempo_dias INT,
    avance_proyecto TEXT,
    FOREIGN KEY (carrera_id) REFERENCES carrera(id),
    FOREIGN KEY (lider_id) REFERENCES persona(id),
    FOREIGN KEY (supervisor_id) REFERENCES supervisor(id)
);




