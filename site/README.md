# Site Laurine (Next.js)

Un mini-site Next.js romantique pour demander un Oui (avec confettis, vibrations, girafes) et une page bonus pour l'anniversaire.

## Pages
- `/` : question principale, bouton Non qui fuit, confettis sur le Oui, image de girafes.
- `/anniversaire` : message de joyeux anniversaire + petit planning.

## Lancer en local
```bash
npm install
npm run dev
# puis ouvrir http://localhost:3000
```

## Build / production sans Docker
```bash
npm run build
npm start  # démarre en mode prod sur le port 3000
```

## Docker
L'image est optimisée (mode `standalone`).
```bash
# build
docker build -t anniv-laurine .
# run (localhost:3000)
docker run --rm -p 3000:3000 anniv-laurine
```

## Déployer sur un VPS (exemple)
1) Se connecter : `ssh user@votre-vps`  
2) Installer Docker (si besoin) :  
   ```bash
   curl -fsSL https://get.docker.com | sh
   sudo usermod -aG docker $USER && newgrp docker
   ```
3) Copier le projet (git clone ou `scp` du dossier).  
4) Depuis le dossier du site :  
   ```bash
   npm install
   npm run build
   npm start -- --hostname 0.0.0.0 --port 3000
   ```
   ou avec Docker :
   ```bash
   docker build -t anniv-laurine .
   docker run -d --name anniv-laurine -p 3000:3000 anniv-laurine
   ```
5) Pour l'exposer sur le port 80 avec Nginx en reverse proxy (extrait) :
   ```nginx
   server {
     listen 80;
     server_name votre-domaine.fr;
     location / {
       proxy_pass http://127.0.0.1:3000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     }
   }
   ```
   Puis `sudo systemctl reload nginx`.

Ajoutez un certificat TLS (Certbot) si vous avez un domaine : `sudo certbot --nginx -d votre-domaine.fr`.
