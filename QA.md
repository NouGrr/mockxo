# Vérification du MVP

Vérifié le 31 octobre 2026 avec Chromium / Playwright, WebGL activé via SwiftShader.

- Accueil : rendu 3D réel, vignettes calculées depuis les scènes, navigation vers le studio.
- Objets : ajout d’un cube, position X modifiée, couleur changée, duplication et suppression.
- Historique : annuler une suppression restaure l’objet et la scène.
- Persistance : sauvegarde IndexedDB, rechargement et restauration de sept objets.
- PNG : téléchargement réel en 1080 × 1080, fond transparent, repères exclus, image inspectée.
- Projet : téléchargement du fichier `.mockxo`, réimportation et restauration.
- GLB : import d’une géométrie de test et modification de sa position.
- GLTF : import avec `.bin` local, puis restauration après rechargement ; transformation conservée dans le projet téléchargé.
- Ressources manquantes : erreur explicite lors de l’import GLTF sans son `.bin`.
- Mobile : captures en 390 × 844 ; aucun débordement horizontal de l’accueil.
- Syntaxe : `node --check dist/app.js`.

Le parcours principal se termine sans erreur JavaScript dans la console. Les captures et fichiers exportés ont été inspectés localement. Les performances sur appareil physique, Safari, Firefox et les très gros modèles restent à vérifier.

## Extension du catalogue — 31 octobre 2026

- 12 vignettes WebGL générées et cadrage inspecté visuellement.
- Ouverture des huit nouvelles scènes depuis le studio ; entrée depuis le catalogue avec guide de première visite.
- Filtres : Textile (2), Édition (2), Technologie (2), Packaging (4), Abstrait (2).
- Recherche : tasse, boite, ecran et t-shirt retrouvent les modèles attendus.
- Projet canette téléchargé, scène sauvegardée puis restaurée au rechargement.
- Accueil vérifié en 390 × 844, sans débordement horizontal.
- Aucune erreur JavaScript pendant ce parcours ; syntaxe des deux modules et `git diff --check` valides.
