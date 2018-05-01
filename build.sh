cd client
npm run build
rsync -av --delete public/ dist/
cd ../