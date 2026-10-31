# Mockxo — Le studio 3D par NEXO

Première version fonctionnelle, exécutée dans le navigateur.

Site : https://nougrr.github.io/mockxo/

## Déploiement GitHub Pages

Le workflow `.github/workflows/pages.yml` publie le dossier `dist/` après chaque push de modifications du site sur `main`. Un déploiement peut également être lancé manuellement depuis l’onglet Actions. Dans les paramètres du dépôt, GitHub Pages utilise **GitHub Actions** comme source. Les liens et imports sont relatifs pour fonctionner sous `/mockxo/`.

## Lancement local

 Aucune installation requise pour lancer l’application :

```sh
cd dist
python3 -m http.server 4173
```

Ouvrir http://localhost:4173. Le studio s’ouvre depuis le bouton de l’accueil ou `/#studio`.

## Inclus

- Accueil responsive, démonstration WebGL orbitale et aperçus réellement rendus.
- Six primitives, quatre scènes procédurales originales, sélection et manipulation par axes.
- Position, rotation, échelle, dimensions, duplication, renommage, masquage et suppression.
- Matériaux, couleurs, rugosité, métallicité, opacité, éclairages et fond.
- Import GLB / GLTF avec ressources locales, conservation des hiérarchies et des matériaux.
- Export PNG jusqu’à 3840 × 2160, fond uni ou transparent, sans grille ni manipulateurs.
- Sauvegarde automatique IndexedDB, restauration au rechargement, fichiers `.mockxo` téléchargeables.
- Annuler / rétablir (20 états), raccourcis et guide de prise en main.

## Architecture

Application statique en modules JavaScript natifs, Three.js 0.180.0 fourni localement dans `dist/vendor`. Aucun serveur, compte ni service de traitement externe. Les polices DM Sans et Space Mono se chargent depuis Google Fonts ; des polices système prennent le relais hors ligne.

`dist/nexo.css` reprend la feuille de styles du site de référence https://nougrr.github.io/nexo/ fournie par le propriétaire, consultée le 31 octobre 2026. Les variables, polices, motifs à points, navigation et footer sont réutilisés. `dist/style.css` adapte l’accueil et ajoute l’interface du studio. La licence Three.js figure dans `dist/vendor/THREE-LICENSE.txt`.

Le choix statique permet de livrer le MVP sans infrastructure ni compilation. React / Next.js, comptes et synchronisation pourront être introduits lorsque les fonctions serveur seront nécessaires.

## Limites actuelles

Un projet actif par navigateur ; sauvegarde sur l’appareil uniquement. Télécharger une copie avant de supprimer les données du navigateur. Les fichiers GLTF doivent être sélectionnés avec leurs `.bin` et textures ; les noms de ressources doivent être uniques. Draco et KTX2 ne sont pas pris en charge. Limites : 50 Mo par import, 600 000 triangles par modèle, 150 objets par scène. La fluidité et le rendu 4K dépendent du GPU et du navigateur.

Les scènes smartphone et flacon sont des géométries procédurales personnalisables. L’application de visuels sur une surface de mockup, les formats OBJ/STL/FBX, le texte 3D, l’export de modèles, l’animation, l’IA et la collaboration restent à développer dans les phases suivantes. Aucune page SEO n’est publiée pour un outil non développé.

## Vérification

La syntaxe se vérifie avec `node --check dist/app.js`. Les parcours navigateur couvrent l’ajout et la transformation, duplication/suppression, annulation, persistance après rechargement, téléchargement PNG transparent et projet, import GLB/GLTF et affichage mobile. Voir `QA.md` pour le résultat des vérifications.
