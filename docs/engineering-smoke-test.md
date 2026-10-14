# Engineering V2 — smoke test

## Objectif
Valider le premier cycle Engineering V2 sur le dépôt pilote : Linkosia OS -> routine Claude Code -> branche -> PR draft -> compte rendu dans OS.

## Périmètre
Ce fichier est le seul changement du test. Aucun code, workflow CI, secret ni donnée métier n'est touché.

## Étapes de validation
1. Une branche dédiée est créée depuis `main`.
2. Ce fichier est ajouté dans un commit unique.
3. Une PR draft vers `main` est ouverte (aucun merge).
4. Les vérifications existantes sont exécutées ; s'il n'y en a pas, elles sont déclarées « non disponibles ».
5. Le rapport est remonté dans Linkosia OS.

## Preuves attendues
- Identifiant de run et session Claude Code
- Lien de la PR draft, nom de branche, SHA du commit
- Résultat des vérifications au SHA exact (ou mention « non disponible »)
