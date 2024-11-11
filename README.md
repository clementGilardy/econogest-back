# Configuration de l'environnement de développement

## Variable d'environnement

Ce projet utilise plusieurs variables d'environnements.
Avant d'utiliser les commandes prisma, il faut set la variable d'environnement

```
DATABASE_URL="postgresql://fanfreluche:development_23$@localhost:5432/econogest"
```

Pour pouvoir exécuter le ```nx serve econogest-back``` il faut set les variables suivantes :

```
PORT=3147
NODE_ENV=development
```

Les valeurs peuvent être modifiées en fonction du front, la variable ```NODE_ENV``` peut avoir les valeurs suivantes :

* developement
* recette
* production

En local, si vous n'arriver pas à exécuter la commande ```prisme migrate dev --name=init``` car il ne trouve pas le fichier .env alors créer le à la racine du projet et metter y la variable ``DATABASE_URL``
