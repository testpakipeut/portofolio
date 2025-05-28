import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const {
      nom,
      email,
      telephone,
      ville,
      pays,
      typeProjet,
      objectif,
      fonctionnalites,
      design,
      budget,
      delais,
      autres
    } = await request.json();

    // Validation basique
    if (!nom || !email || !typeProjet || !objectif || !design || !budget || !delais) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }

    // Insertion dans la base de données
    await pool.execute(
      `INSERT INTO devis (
        nom, email, telephone, ville, pays, type_projet, objectif,
        fonctionnalites, design, budget, delais, autres
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        nom,
        email,
        telephone || null,
        ville,
        pays,
        typeProjet,
        objectif,
        JSON.stringify(fonctionnalites),
        design,
        budget,
        delais,
        autres || null
      ]
    );

    return NextResponse.json(
      { message: 'Demande de devis envoyée avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi du devis:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du devis' },
      { status: 500 }
    );
  }
} 