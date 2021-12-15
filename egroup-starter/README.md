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

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

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

Step 2:
login with github access token.

```sh
npm login --scope=@eGroupTeam --registry=https://npm.pkg.github.com
```

Pasting the token we create in step 1 into password field.
