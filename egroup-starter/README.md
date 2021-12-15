# create-next-app

This is the official TypeScript template for eGroup team.

To use this template, add `--use-npm --example "https://github.com/eGroupTeam/frontend-templates/tree/main/egroup-starter"` when creating a new app.

For example:

```sh
npx create-next-app my-app --example "https://github.com/eGroupTeam/frontend-templates/tree/main/egroup-starter"

# or

yarn create next-app my-app --example "https://github.com/eGroupTeam/frontend-templates/tree/main/egroup-starter"
```

For more information, please refer to:

- [User Guide](https://nextjs.org/docs/getting-started) – How to develop apps bootstrapped with NextJs.

## Https develop server

If need https develop server please create self signed certificate.

Use openssl

```sh
mkdir certificate && cd certificate
openssl req -x509 -out certificate.crt -keyout privateKey.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

And run both.

```sh
yarn dev
yarn dev:https
```

## If you can't access npm package.

Please create github personal access token and run npm login script.

Step 1:
Create github personal access token.
Go to Settings -> Developer settings -> Personal access tokens -> Generate new token
Select scopes: repo, read:packages
<img width="690" alt="截圖 2021-12-15 17 01 17" src="https://user-images.githubusercontent.com/35906352/146155804-745c4227-a435-4ec1-94bb-cbf91c2abe0e.png">

Step 2:
login with github access token.

```sh
npm login --scope=@eGroupTeam --registry=https://npm.pkg.github.com
```

Pasting the token we create in step 1 into password field.
<img width="179" alt="截圖 2021-12-15 16 57 40" src="https://user-images.githubusercontent.com/35906352/146155636-93cc1de7-6f57-4004-a0ad-e36398e0eacf.png">
