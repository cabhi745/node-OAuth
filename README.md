# node-OAuth
A node+express project using typescript that implements google OAuth 2.0 workiflow using passport package

Install: 
npm install typescript --save-dev
npm install @types/node --save-dev : node types bindings for inbuilt modules
npx tsc --init --outDir build --esModuleInterop --lib es6: create tsconfig file, more options check website
add type: "module" in package json for es6 imports

compiling and running in dev: 
npm install --save-dev ts-node nodemon
add nodemon.json
add start:dev script in package json

compiling and running in prod: 
npm install --save-dev rimraf
add build script in package json
add start script in package json


