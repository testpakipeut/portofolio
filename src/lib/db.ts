import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Fonction pour initialiser la base de données
async function initDatabase() {
  try {
    // Vérifier si la table messages existe
    const [rows] = await pool.query<mysql.RowDataPacket[]>(
      "SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = ? AND table_name = 'messages'",
      [process.env.MYSQL_DATABASE]
    );

    // Si la table n'existe pas, la créer
    if (rows[0].count === 0) {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS messages (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nom VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('Table messages créée avec succès');
    } else {
      console.log('Table messages existe déjà');
    }

    // Vérifier si la table devis existe
    const [devisRows] = await pool.query<mysql.RowDataPacket[]>(
      "SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = ? AND table_name = 'devis'",
      [process.env.MYSQL_DATABASE]
    );

    // Si la table n'existe pas, la créer
    if (devisRows[0].count === 0) {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS devis (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nom VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          telephone VARCHAR(20),
          ville VARCHAR(255) NOT NULL,
          type_projet VARCHAR(50) NOT NULL,
          objectif TEXT NOT NULL,
          fonctionnalites JSON,
          design VARCHAR(50) NOT NULL,
          budget VARCHAR(50) NOT NULL,
          delais VARCHAR(50) NOT NULL,
          autres TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('Table devis créée avec succès');
    } else {
      console.log('Table devis existe déjà');
    }
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données:', error);
    throw error;
  }
}

// Exécuter l'initialisation
initDatabase().catch(console.error);

export default pool; 